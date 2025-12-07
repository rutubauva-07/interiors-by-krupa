import React from 'react';

function Footer() {
  return (
    <footer className="footer-light">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo-only">
          <img 
            src="/images/interiors-by-krupa-removebg.png" 
            alt="Interiors by Krupa" 
            className="footer-logo-main"
          />
        </div>

        {/* Studio Name + Contact + Address (Tight Spacing) */}
        <div className="footer-info-block">
          <p className="footer-studio-name">
            <strong>Interiors by Krupa Design Studio</strong>
          </p>

          {/* Phone + Email with Icons */}
          <div className="footer-contact-info">
            <p className="footer-contact-line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+919769062503" className="footer-contact-text">
                +91 9769062503
              </a>
            </p>

            <p className="footer-contact-line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:interiorsbykrupa@gmail.com" className="footer-contact-text">
                interiorsbykrupa@gmail.com
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="footer-address-lines">
            <p>501, Sky Fortune, Tilak Road,</p>
            <p>Ghatkopar East, Mumbai - 400 077</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://instagram.com/interiors_by_krupa" target="_blank" rel="noreferrer">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="18" cy="6" r="1"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/interiorsbykrupa" target="_blank" rel="noreferrer">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2025 Interiors by Krupa • All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;