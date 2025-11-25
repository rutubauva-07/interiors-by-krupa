import React from 'react';

function Footer() {
  return (
    <footer className="footer-light">
      <div className="footer-container">

        {/* Only Logo – No Text */}
        <div className="footer-logo-only">
          <img 
            src="/logo-gold.svg"   // ya /logo-gold.png jo bhi ho
            alt="Interiors by Krupa" 
            className="footer-logo-main"
          />
        </div>

        {/* Address */}
        <div className="footer-address">
          <p><b>Interiors by Krupa Design Studio</b></p>
          <p>301, 3rd Floor, Sumer Kendra, Worli,</p>
          <p>Mumbai - 400 018, India</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://instagram.com/interiorsbykrupa" target="_blank" rel="noreferrer">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1"/></svg>
          </a>
          <a href="https://linkedin.com/company/interiorsbykrupa" target="_blank" rel="noreferrer">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:hello@interiorsbykrupa.com">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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