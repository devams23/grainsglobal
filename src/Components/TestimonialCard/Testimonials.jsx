import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Our Customers</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"The quality of the cereals, pulses, and spices from Delicosa Fz is outstanding. My dishes have never tasted better!"</p>
          <p>~John M.</p>
        </div>
        <div className="testimonial">
          <p>"I love the freshness and flavor of the products from Delicosa Fz. They're my go-to for quality ingredients."</p>
          <p>~Sarah L.</p>
        </div>
        <div className="testimonial">
          <p>"The best quality ingredients for a healthy diet come from Delicosa Fz. I trust them completely."</p>
          <p>~Emily R.</p>
        </div>
      </div>
    </section>
  );
};
// TODO: create individual component of card for testimonial 
export default Testimonials;
