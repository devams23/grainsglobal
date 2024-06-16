import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="text-center text-white display-6 fw-bold mb-4">What Customers Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"The quality of the cereals, pulses, and spices from Grains Global  is outstanding. My dishes have never tasted better!"</p>
          <p>~John M.</p>
        </div>
        <div className="testimonial">
          <p>"I love the freshness and flavor of the products from Grains Global. They're my go-to for quality ingredients."</p>
          <p>~Sarah L.</p>
        </div>
        <div className="testimonial">
          <p>"The best quality ingredients for a healthy diet come from Grains Global. I trust them completely."</p>
          <p>~Emily R.</p>
        </div>
      </div>
    </section>
  );
};
// TODO: create individual component of card for testimonial 
export default Testimonials;
