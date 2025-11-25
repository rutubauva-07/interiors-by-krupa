import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About Us", id: "about-us" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <>
      {/* Hamburger – Gold & Clean */}
      <div className="hamburger-light" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar – Light Luxury Theme */}
      <div className={`sidebar-light ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header-light">
          {/* Logo Instead of Text */}
          <img 
            src="interiors-by-krupa/public/images/interiors-by-krupa.jpeg" 
            alt="Interiors by Krupa" 
            className="sidebar-logo"
          />
          <button className="close-btn-light" onClick={toggle}>
            ×
          </button>
        </div>

        {/* Clean Menu – No Bullets */}
        <nav className="sidebar-menu-light">
          {links.map((link) => (
            <button
              key={link.id}
              className="sidebar-link-light"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay-light" onClick={toggle}></div>}
    </>
  );
}

export default Navbar;