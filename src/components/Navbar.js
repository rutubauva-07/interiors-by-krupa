import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // sidebar band kar dega
  };

const links = [
  { name: "Home", id: "home" },
  { name: "Categories", id: "categories" },        // ← ye tha pehle nahi
  { name: "Portfolio", id: "portfolio" },
  { name: "About Us", id: "about-us" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact-us" }           // ← ab Footer pe jayega
];
  return (
    <>
      {/* Hamburger */}
      {!isOpen && (
        <div className="hamburger" onClick={toggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Interiors by Krupa</h2>
          <button className="close-btn" onClick={toggle}>✕</button>
        </div>
        <ul className="sidebar-menu">
          {links.map((link) => (
            <li key={link.id}>
              <button 
                className="sidebar-link-btn"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <p>✉ hello@interiorsbykrupa.com</p>
          <p>☎ +91 98765 43210</p>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={toggle}></div>}
    </>
  );
}

export default Navbar;