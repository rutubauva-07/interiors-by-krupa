import React from 'react';

function Contact() {
  return (
    <section id="contact-us" className="contact-section">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title text-white">CONTACT US</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <input type="text" className="form-control mb-3" placeholder="Name" />
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <textarea className="form-control mb-3" rows="5" placeholder="Message"></textarea>
              <button type="submit" className="btn btn-outline-light">Send Message</button>
            </form>
          </div>
          <div className="col-md-6 text-white">
            <p><strong>Krupa Shah</strong><br />
            Ghatkopar, Mumbai</p>
            <p>Phone: +91 22 1234 5678<br />
            Email: studio@interiorsbykrupa.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;