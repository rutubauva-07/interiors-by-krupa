import React, { useState } from 'react';

const testimonials = [
  { name: "Mr. & Mrs. Gupta", text: " Krupa turned our boring flat into a 5-star home!Krupa turned our boring flat into a 5-star home!Krupa turned our boring flat into a 5-star home!Krupa turned our boring flat into a 5-star home!Krupa turned our boring flat into a 5-star home!", place: "Bandra" },
  { name: "Rohan Malhotra", text: "Best decision for our office makeover. Clients love it!", place: "BKC" },
  { name: "Priya Singh", text: "On time, on budget, beyond dreams!", place: "Juhu" },
  { name: "Ananya & Vikram", text: "Our home finally feels like 'us'. Thank you Krupa!", place: "Malabar Hill" },
  { name: "Neha Kapoor", text: "Pure magic. Every detail is perfect.", place: "Worli" }
];

function Testimonials() {
  const [centerIndex, setCenterIndex] = useState(0);

  const prev = () => setCenterIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCenterIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const getCardClass = (index) => {
    const diff = index - centerIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === - (testimonials.length - 1)) return "right";
    if (diff === -1 || diff === testimonials.length - 1) return "left";
    return "hidden";
  };

  return (
    <section id="testimonials" className="testimonials-light">
      <div className="container">
        <h2 className="section-title">TESTIMONIALS</h2>

        <div className="carousel-container">
          {/* Cards */}
          <div className="carousel-track">
            {testimonials.map((t, i) => {
              const position = getCardClass(i);
              return (
                <div key={i} className={`testi-card-new ${position}`}>
                  <div className="card-inner">
                    <p className="quote-new">“{t.text}”</p>
                    <p className="name-new">- {t.name}</p>
                    <p className="place-new">{t.place}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button onClick={prev} className="carousel-arrow left-arrow">←</button>
          <button onClick={next} className="carousel-arrow right-arrow">→</button>

          {/* Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === centerIndex ? 'active' : ''}`}
                onClick={() => setCenterIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;