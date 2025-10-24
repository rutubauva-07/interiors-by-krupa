import React from 'react';

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-up" data-aos-delay="300">
        {/* Main Title */}
        <h1 className="hero-title">
          <span className="line">INTERIORS</span>
          <span className="line highlight">BY KRUPA</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Crafting Spaces That Speak Your Story
        </p>
        <p className="hero-desc">
          Specialised in all disciplines of interior designing with elements of design, style, comfort & luxury
        </p>

        {/* CTA Button */}
        <a href="#about-us" className="hero-btn">
          Discover Elegance
        </a>
      </div>
    </section>
  );
}

export default Home;