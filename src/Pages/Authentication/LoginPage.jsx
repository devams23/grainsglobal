import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
    // Name validation
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else {
      const password = formData.password;
      const hasMinLength = password.length > 7;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!hasMinLength) {
        errors.password = 'Password must be at least 8 characters long';
      } else if (!hasLowercase) {
        errors.password = 'Password must contain at least one lowercase letter';
      } else if (!hasUppercase) {
        errors.password = 'Password must contain at least one uppercase letter';
      } else if (!hasNumber) {
        errors.password = 'Password must contain at least one number';
      } else if (!hasSpecialChar) {
        errors.password = 'Password must contain at least one special character';
      }
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
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
      <Row className="justify-content-center w-100">
        <Col lg={6} md={8} sm={10}>
          <Card style={{backgroundColor: 'rgba(255, 255, 255, 0.11)'}}>
            <Card.Body>
              <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>Login </h2>
              <Form style={{padding: '0px 30px 0px 30px'}} onSubmit={handleSubmit}>

                <Form.Group style={{paddingTop: '10px'}} className='my-3' controlId="formEmail">
                  <Form.Label style={{ color: '#fff' }}>Email</Form.Label>
                  <Form.Control
                    style={{ color: '#1F603C', borderColor: '#fff', padding: '5px' }}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </Form.Group>
                <Form.Group style={{paddingTop: '10px'}} className='my-3' controlId="formPassword">
                  <Form.Label style={{ color: '#fff' }}>Password</Form.Label>
                  <Form.Control
                    style={{ color: '#1F603C', borderColor: '#fff', padding: '5px' }}
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                  {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  className="w-100 my-3"
                  style={{ backgroundColor: '#DAA520', borderColor: '#DAA520', color: '#1F603C' }}
                >
                  Submit
                </Button>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  Don't have an account ? <a href="/signup" style={{ color: '#DAA520' }}>Create one</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
