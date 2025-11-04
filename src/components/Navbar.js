import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(
    () => sessionStorage.getItem("activeSection") || "home"
  );

  const location = useLocation();
  const navigate = useNavigate();

  // 🏠 Reset active section when first entering home
  useEffect(() => {
    if (location.pathname === "/" && !sessionStorage.getItem("activeSection")) {
      setActiveSection("home");
    }
  }, [location.pathname]);

  // 🧭 Scroll tracking (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      if (menuOpen) return; // 🚫 Skip updates when mobile menu is open
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "timing", "gallery", "location"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
        sessionStorage.setItem("activeSection", current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, menuOpen]);

  // ✅ Restore last active section after reload or returning home
  useEffect(() => {
    if (location.pathname !== "/") return;

    const savedSection = sessionStorage.getItem("activeSection");
    if (savedSection && document.getElementById(savedSection)) {
      setTimeout(() => {
        const el = document.getElementById(savedSection);
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 600);
    }
  }, [location.pathname]);

  // 🔒 Lock/unlock scroll when mobile menu is open (without page jump)
  useEffect(() => {
    let scrollY = 0;

    if (menuOpen) {
      // Save current scroll position
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll to same position (no jump)
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
    }

    // Prevent scroll tracking events while menu is open
    const handleScroll = (e) => {
      if (menuOpen) e.stopImmediatePropagation();
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [menuOpen]);

  // 🧭 Smooth scroll & navigation
  const handleNavClick = (id, e) => {
    e.preventDefault();
    sessionStorage.setItem("activeSection", id);

    if (location.pathname !== "/") {
      navigate("/");
      setMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 400);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      setMenuOpen(false);
      setTimeout(() => {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 150);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "timing", label: "Timing" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* === LOGO === */}
          <div className="navbar-logo" onClick={(e) => handleNavClick("home", e)}>
            <div className="logo-icon">⛪</div>
            <div>
              <h1 className="logo-title">CSI Immanuel Church</h1>
              <p className={`logo-subtitle ${scrolled ? "hidden" : ""}`}>
                Faith • Hope • Love
              </p>
            </div>
          </div>

          {/* === DESKTOP NAV === */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={activeSection === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* === HAMBURGER === */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* === MOBILE OVERLAY === */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* === MOBILE MENU === */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-footer">
          <p>Join us for worship</p>
          <strong>Every Sunday at 9:45 AM</strong>
        </div>
      </div>
    </>
  );
}

export default Navbar;
