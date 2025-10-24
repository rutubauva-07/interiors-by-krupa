import React from 'react';

// Create array of your images
const images = Array.from({ length: 6 }, (_, i) => `/images/${i + 1}.jpg`);

function Portfolio() {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">PORTFOLIO</h2>
        <div className="horizontal-scroll">
          {images.map((src, i) => (
            <div className="scroll-item" key={i}>
              <img src={src} alt={`Project ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;