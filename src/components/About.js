import React from 'react';

function About() {
  return (
    <section id="about-us" className="py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">ABOUT US</h2>
        <p className="text-center lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
          We serve both private and commercial clients. From classic restoration to modern minimalism, we find the quintessence of their vision and elevate it equally in the scale of the design and its subtle details.
        </p>
        <div className="text-center mt-5">
          <a href="#portfolio" className="btn" style={{ border: '2px solid var(--gold)', color: 'var(--gold)' }}>
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;