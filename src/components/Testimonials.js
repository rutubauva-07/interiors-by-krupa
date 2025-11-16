import React, { useRef } from 'react';

const testimonials = [
  { name: "Mr. & Mrs. Gupta", text: "Krupa turned our boring flat into a 5-star home!", place: "Bandra" },
  { name: "Rohan Malhotra", text: "Best decision for our office makeover. Clients love it!", place: "BKC" },
  { name: "Priya Singh", text: "On time, on budget, beyond dreams!", place: "Juhu" }
];

function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({ left: direction * 400, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-5 bg-dark text-white">
      <div className="container position-relative" data-aos="fade-up">
        <h2 className="section-title text-white text-center">WHAT CLIENTS SAY</h2>
        <button className="arrow left" onClick={() => scroll(-1)}>❮</button>
        <button className="arrow right" onClick={() => scroll(1)}>❯</button>
        <div className="testi-scroll" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <p className="quote">“{t.text}”</p>
              <p className="name">- {t.name}, {t.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;