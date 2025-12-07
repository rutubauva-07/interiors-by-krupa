import React, { useState, useEffect, useRef } from 'react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const currentX = e.type.includes('mouse') ? e.changedTouches?.[0]?.clientX || e.pageX : e.changedTouches[0].clientX;
    const diff = currentX - startX;

    if (Math.abs(diff) > 80) {
      if (diff > 0) prevSlide();
      else nextSlide();
    }
    setTranslateX(0);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">PORTFOLIO</h2>

        <div className="portfolio-swiper-wrapper">
          
          {/* Swipeable Slider */}
          <div 
            className="portfolio-swiper"
            ref={sliderRef}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          >
            <div 
              className="swiper-track"
              style={{
                transform: `translateX(calc(${(-currentIndex * 100)}% + ${translateX}px))`,
                transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            >
              {portfolioImages.map((src, index) => (
                <div key={index} className="swiper-slide">
                  <img 
                    src={src} 
                    alt={`Project ${index + 1}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} className="swipe-arrow left">
            <svg width="48" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>

          <button onClick={nextSlide} className="swipe-arrow right">
            <svg width="48" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="swipe-dots">
            {portfolioImages.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;