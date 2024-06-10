import React, { useRef, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import "./ContactUsForm.css";
import { configdata } from "../../../config/config";

export default function ContactUsForm() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation function for each form field
  const validate = () => {
    const form = formRef.current;
    const errors = {};
    const name = form["name"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const message = form["message"].value;

    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!message) {
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
      setIsLoading(true); // Start loading
      const form = formRef.current;
      const fd = new FormData(form);
      const scriptURL = configdata.googlesheeturl;

      fetch(scriptURL, { method: "POST", body: fd })
        .then((response) => {
          setShowAlert(true); // Show success alert
          form.reset(); // Reset the form fields
        })
        .catch((error) => {
          alert("Error!", error.message);
        })
        .finally(() => {
          setIsLoading(false); // Stop loading
        });
    }
  };

  return (
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
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Your message has been successfully submitted!
            </Alert>
          )}
          <form ref={formRef} onSubmit={handleSubmit} name="contact_us_form">
            <div className="form-group">
              <label htmlFor="formName">Name</label>
              <input type="text" placeholder="Enter your name" name="name" />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="formEmail">Email</label>
              <input type="email" placeholder="Enter your email" name="email" />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="formPhone">Phone No.</label>
              <input
                type="tel"
                placeholder="Enter your phone no."
                name="phone"
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="formMessage">Message</label>
              <textarea
                rows={6}
                placeholder="Enter your message"
                name="message"
              ></textarea>
              {errors.message && <div className="error">{errors.message}</div>}
            </div>
            <Button
              type="submit"
              className="submit-button"
              disabled={isLoading}
              style={{ backgroundColor: '#DAA520', borderColor: '#DAA520', color: '#1F603C' ,  fontWeight: "bold"}}
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
