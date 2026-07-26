import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const NAV_LINKS = ["Home", "About", "Timing", "Gallery", "Location"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Solid background once the user scrolls past the hero, so links stay readable
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "timing", "gallery", "location"];

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = id;
          }
        }
      });

      setActive(
        currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Lock body scroll while the mobile drawer is open

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the drawer on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();

    setMenuOpen(false);

    const section = document.getElementById(link.toLowerCase());

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <div className="navbar__brand-text">
          <span className="navbar__brand-title">CSI Immanuel Church</span>
          <span className="navbar__brand-subtitle">Chithumoondradaippu</span>
        </div>
      </div>

      <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`navbar__link ${active === link ? "navbar__link--active" : ""
              }`}
            onClick={(e) => handleLinkClick(e, link)}
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
      </button>

      {menuOpen && <div className="navbar__scrim" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
