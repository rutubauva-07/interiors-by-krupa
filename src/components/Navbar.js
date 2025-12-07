import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);   // ← Ye toggle karega
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);  // ← Sidebar band bhi ho jayega
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About Us", id: "about-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Us", id: "contact-us" },
  ];

  return (
    <>
      {/* HAMBURGER — SIRF JAB SIDEBAR BAND HO TAB DIKHE */}
      {!isOpen && (
        <div 
          className="hamburger-light" 
          onClick={toggle}
          style={{ pointerEvents: isOpen ? 'none' : 'auto' }}  // Extra safety
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* SIDEBAR */}
      <div className={`sidebar-light ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header-light">
          <img 
            src="/images/interiors-by-krupa-removebg.png" 
            alt="Interiors by Krupa" 
            className="sidebar-logo"
          />
          <button className="close-btn-light" onClick={toggle}>
            ×
          </button>
        </div>

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

      {/* OVERLAY — Click kare toh band ho jaye */}
      {isOpen && (
        <div 
          className="overlay-light" 
          onClick={toggle}
        />
      )}
    </>
  );
}

export default Navbar;