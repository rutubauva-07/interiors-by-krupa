import React from 'react';

function About() {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">

          {/* LEFT: Founder Photo */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            <img 
              src="/images/Krupa Photo.jpg" 
              alt="Krupa Shah" 
              className="about-img"
            />
            <p className="mt-3 fw-bold" style={{fontSize:'1.2rem', color:'#d4af37'}}>
              Krupa Shah<br/>
              Founder & Principal Designer
            </p>
          </div>

          {/* RIGHT: Tumhara EXACT Content */}
          <div className="col-lg-7">
            <h2 className="section-title">ABOUT US</h2>
            
            <p style={{lineHeight:'1.9', marginBottom:'1.5rem'}}>
              Every space tells a story — of the people who live, work, and dream within it. 
              <strong> Interiors by Krupa</strong> was founded on this belief with a vision to bring spaces to life through design that is both timeless, elegant and deeply personal.
            </p>

            <p style={{lineHeight:'1.9', marginBottom:'1.5rem'}}>
              Founded by <strong>Krupa Shah</strong>, graduate from Sir J J School of Art founded this design studio having over <strong>15 years of experience</strong> in curating bespoke residential and commercial interiors. 
              What began as a passion for transforming ordinary spaces into soulful experiences has evolved into a design practice known for its refined aesthetics, meticulous attention to detail, and human-centered approach.
            </p>

            <p style={{lineHeight:'1.9', marginBottom:'1.5rem'}}>
              At Interiors by Krupa, every project is a journey we take together — from the first idea to the final handover. 
              We stand by our clients through each step, ensuring that every corner reflects their personality, purpose, and sense of harmony.
            </p>

            <p className="fst-italic" style={{fontSize:'1.25rem', color:'#d4af37', lineHeight:'1.8'}}>
              Because for us, design is more than what meets the eye — it’s about creating spaces that feel alive, warm, and unmistakably <strong>yours</strong>.
            </p>

            {/* NO CTA BUTTON */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;