import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Form, Row , Spinner , Alert} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import authservice from "../../appwrite/auth";
import { loginstore } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else {
      const password = formData.password;
      if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      } else if (!/[a-z]/.test(password)) {
        errors.password = "Password must contain at least one lowercase letter";
      } else if (!/[A-Z]/.test(password)) {
        errors.password = "Password must contain at least one uppercase letter";
      } else if (!/[0-9]/.test(password)) {
        errors.password = "Password must contain at least one number";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.password =
          "Password must contain at least one special character";
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsLoading(true);
        //setMessage("fdsafs")
        const session = await authservice.signin({ ...formData });
        if (session) {
          const userdata = await authservice.getcurrentuser();
          if (userdata) {
            dispatch(loginstore(userdata));
            navigate("/");
          }
        }
      } catch (error) {
        setMessage("Invalid credentials");
        console.error("Error logging in:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "rgba(255, 255, 255, 0)" }}
    >
      <Row className="justify-content-center w-100">
        <Col lg={6} md={8} sm={10}>
          <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.11)" }}>
            <Card.Body>
              <h2
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Login
              </h2>
              <Form
                style={{ padding: "0px 30px 0px 30px" }}
                onSubmit={handleSubmit}
              >
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="my-3"
                  controlId="formEmail"
                >
                  <Form.Label style={{ color: "#fff" }}>Email</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#1F603C",
                      borderColor: "#DAA520",
                      padding: "5px",
                      color:"white",

                    }}
                    
                    type="email"
                    placeholder="Enter your email " 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </Form.Group>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="my-3"
                  controlId="formPassword"
                >
                  <Form.Label style={{ color: "#fff" }}>Password</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#1F603C",
                      borderColor: "#DAA520",
                      padding: "5px",
                    }}
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </Form.Group>
                {message && <Alert variant="danger" style={{ textAlign: 'center' }}>{message}</Alert>}
                <Button
                  type="submit"
                  className="w-100 my-3"
                  style={{
                    backgroundColor: "#DAA520",
                    borderColor: "#DAA520",
                    color: "#1F603C",
                  }}
                >
                  {isloading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />{" "}
                      
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
                <div style={{ textAlign: "center", color: "#fff" }}>
                  Don't have an account?{" "}
                  <NavLink to="/signup" style={{ color: "#DAA520" }}>
                    Create Account
                  </NavLink>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
