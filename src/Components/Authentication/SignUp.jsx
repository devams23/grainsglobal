import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginstore } from "../../store/AuthSlice";
import authservice from "../../appwrite/auth";
import { useDispatch } from "react-redux";
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setlErrors] = useState([]);
  const [passerrors, setpassErrors] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Handle input change for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function for each form field
  const validate = () => {
    const errors = {};
    const passerrors = [];
    // Name validation
    if (!formData.name) {
      
      errors.name = "Name is required";
    }
    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    // Password validation
    if (!formData.password) {
      passerrors.push("Password is required");
    } else {
      const password = formData.password;
      if (password.length < 8) {
        passerrors.push("Password must be at least 8 characters long");
      }
      if (!/[a-z]/.test(password)) {
        passerrors.push("Password must contain at least one lowercase letter");
      }
      if (!/[A-Z]/.test(password)) {
        passerrors.push("Password must contain at least one uppercase letter");
      }
      if (!/[0-9]/.test(password)) {
        passerrors.push("Password must contain at least one number");
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passerrors.push("Password must contain at least one special character");
      }
    }

    return {errors, passerrors};
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, passerrors } = validate();
    setlErrors(errors);
    setpassErrors(passerrors);
    //console.log(errors.name.length , passerrors)

    if (Object.keys(errors).length === 0 && passerrors.length === 0) {
      try {
        setIsLoading(true);
        const session = await authservice.signup({ ...formData });
        if (session) {
          const userdata = await authservice.getcurrentuser();
          if (userdata) {
            setIsLoading(false);
            dispatch(loginstore(userdata));
            navigate("/");
          }
        }
      } catch (error) {
        setMessage("Email Already Exists");
        console.log("Error logging in:", error);
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
                Create Account
              </h2>
              <Form
                style={{ padding: "0px 30px 0px 30px" }}
                onSubmit={handleSubmit}
              >
                <Form.Group className="my-3" controlId="formName">
                  <Form.Label style={{ color: "#DAA520" }}>Name</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#1F603C",
                      borderColor: "#DAA520",
                      padding: "10px",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <div style={{ color: "white" }}>{"*" + errors.name}</div>
                  )}
                </Form.Group> 
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="my-3"
                  controlId="formEmail"
                >
                  <Form.Label style={{ color: "#DAA520" }}>Email</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#1F603C",
                      borderColor: "#DAA520",
                      padding: "10px",
                      color: "white",
                    }}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email&& (
                    <div style={{ color: "white" }}>{"*" + errors.email}</div>
                  )}
                </Form.Group>
                <Form.Group
                  style={{ paddingTop: "10px" }}
                  className="my-3"
                  controlId="formPassword"
                >
                  <Form.Label style={{ color: "#DAA520" }}>Password</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#1F603C",
                      borderColor: "#DAA520",
                      padding: "10px",
                      color: "white",
                    }}
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                  {passerrors &&
                    passerrors.length > 0 &&
                    passerrors.map((error) => (
                      <div style={{ color: "white" }} key={error}>
                        *{error}
                      </div>
                    ))}
                </Form.Group>
                {message && (
                  <Alert variant="danger" style={{ textAlign: "center" }}>
                    {message}
                  </Alert>
                )}
                <Button
                  variant="warning"
                  type="submit"
                  className="w-100 my-3"
                  style={{
                    backgroundColor: "#DAA520",
                    borderColor: "#DAA520",
                    color: "#1F603C",
                  }}
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
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
                <div style={{ textAlign: "center", color: "#fff" }}>
                  Already Have an Account ?{" "}
                  <a href="/login" style={{ color: "#DAA520" }}>
                    Sign in
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
