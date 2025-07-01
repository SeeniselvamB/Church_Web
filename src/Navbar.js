// import React, { useState } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">CSI Immanuel Church</div>
//       <input
//         type="checkbox"
//         id="menu-toggle"
//         checked={menuOpen}
//         onChange={() => setMenuOpen(!menuOpen)}
//       />
//       <label htmlFor="menu-toggle" className="hamburger">☰</label>
//       <ul className="nav-links">
//         <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
//         <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
//         <li><a href="#timing" onClick={() => setMenuOpen(false)}>Timing</a></li>
//         <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
//         <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
//         <li><a href="#location" onClick={() => setMenuOpen(false)}>Location</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Wait for homepage to render
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">CSI Immanuel Church</div>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="menu-toggle" className="hamburger">☰</label>
      <ul className="nav-links">
        <li><a href="#home"onClick={() => handleNavClick('home')}>Home</a></li>
        <li><a href="#about"onClick={() => handleNavClick('about')}>About</a></li>
        <li><a href="#timing" onClick={() => handleNavClick('timing')}>Timing</a></li>
        <li><a href="#gallery" onClick={() => handleNavClick('gallery')}>Gallery</a></li>
        <li><a href="#branch" onClick={() => handleNavClick('events')}>Branch</a></li>
        <li><a href="#location" onClick={() => handleNavClick('location')}>Location</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
