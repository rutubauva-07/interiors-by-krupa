import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'rgba(0,0,0,0.8)' }}>
      <div className="container">
        <a className="navbar-brand" href="#home" style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem' }}>
        Interiors by Krupa
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            {['Home', 'About Us', 'Portfolio', 'Testimonials', 'Contact Us'].map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase().replace(' ', '-')}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;