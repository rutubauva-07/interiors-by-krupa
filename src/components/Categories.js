import React from 'react';

const cats = [
  { title: "Residential", icon: "🏡", desc: "Homes that breathe luxury" },
  { title: "Commercial", icon: "🏢", desc: "Spaces that inspire success" },
  { title: "Turnkey", icon: "🔑", desc: "Move-in ready perfection" },
  { title: "Bespoke", icon: "✨", desc: "One-of-a-kind creations" }
];

function Categories() {
  return (
    <section className="categories py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {cats.map((c, i) => (
            <div className="col-md-3" key={i} data-aos="zoom-in" data-aos-delay={i*100}>
              <div className="cat-card">
                <div className="cat-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;