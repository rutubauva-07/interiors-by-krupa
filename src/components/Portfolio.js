import React, { useEffect, useRef } from 'react';

const images = Array.from({ length: 9 }, (_, i) => `/images/${i+1}.jpg`);

function Portfolio() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft + 50 >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">PORTFOLIO</h2>
        <div className="horizontal-scroll" ref={scrollRef}>
          {images.map((src, i) => (
            <div className="scroll-item" key={i}>
              <img src={src} alt={`Project ${i+1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;