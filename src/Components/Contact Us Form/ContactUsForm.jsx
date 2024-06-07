import React, { useState } from "react";
import "./ContactUsForm.css";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function for each form field
  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData); // Log form data
      // You can submit the form data to your backend or perform any other action here
    }
  };

  return (
    <>
      <div className="contact-main-container">
        <div className="contact-heading">
          <h1>Get In Touch</h1>
          <p>
            <span>Have a question?</span> Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </div>
        <div className="contact-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="formName">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="formEmail">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="formPhone">Phone No.</label>
                <input
                  type="tel"
                  placeholder="Enter your phone no."
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="formMessage">Message</label>
                <textarea
                  rows={6}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="error">{errors.message}</div>
                )}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
