import React from 'react';

function Footer() {
  return (
    <footer id="contact-us" className="footer py-5 text-white">
      <div className="container text-center">
        <h3>Let’s Create Magic Together</h3>
        <p className="lead">Follow us on Instagram for daily inspiration</p>
        <a 
          href="https://instagram.com/interiorsbykrupa" 
          className="insta-btn"
        >
          📸 @interiorsbykrupa
        </a>
        <div className="mt-4">
          <p>© 2025 Interiors by Krupa • Mumbai, India</p>
          <p>Phone: +91 98765 43210 | Email: hello@interiorsbykrupa.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;