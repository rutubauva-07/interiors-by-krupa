import React from 'react';

function About() {
  return (
    <section id="about-us" className="py-5 bg-light">
      <div className="container">

        <h2 className="section-title text-center mb-5">ABOUT US</h2>

        <div className="about-grid" data-aos="fade-up">
          
          {/* LEFT: Photo + Name */}
          <div className="photo-col">
            <div className="krupa-photo-wrapper">
              <img
                src="/images/Krupa Photo.jpg"
                alt="Krupa Shah"
                className="krupa-photo"
              />
            </div>

            <div className="text-center mt-4">
              <p className="fw-bold mb-1" style={{fontSize: '1.5rem', color: '#1a1a1a'}}>
                Krupa Shah
              </p>
              <p style={{fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '500'}}>
                Founder & Principal Designer
              </p>
            </div>
          </div>

          {/* RIGHT: Text – photo ke top se start, photo ke end se end */}
          <div className="text-col">
            <div className="text-content">
              <p className="about-text">
                Every space tells a story — of the people who live, work, and dream within it. 
                Interiors by Krupa was founded on this belief with a vision to bring spaces to life through design that is timeless, elegant and deeply personal.
              </p>

              <p className="about-text">
                Krupa Shah, graduate from Sir J J School of Art founded this design studio, what began as a passion for transforming ordinary spaces into soulful experiences has evolved into a design practice known for its refined aesthetics, meticulous attention to detail, and human-centered approach.
              </p>

              <p className="about-text">
                At Interiors by Krupa, every project is a journey we take together — from the first idea to the final handover. 
                We stand by our clients through each step, ensuring that every corner reflects their personality, purpose and sense of harmony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;