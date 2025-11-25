import React, { useState, useEffect } from 'react';

const portfolioImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
];

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrentIndex(prev => prev === 0 ? portfolioImages.length - 1 : prev - 1);
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % portfolioImages.length);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">PORTFOLIO</h2>

        <div className="portfolio-slider-wrapper">

          {/* Image Slider */}
          <div className="portfolio-slider">
            {portfolioImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Project ${index + 1}`}
                className={`slider-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Clean Chevron Icons (No Text Error) */}
          <button onClick={goPrev} className="portfolio-arrow left" aria-label="Previous">
            <svg width="48" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>

          <button onClick={goNext} className="portfolio-arrow right" aria-label="Next">
            <svg width="48" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="portfolio-dots">
            {portfolioImages.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;