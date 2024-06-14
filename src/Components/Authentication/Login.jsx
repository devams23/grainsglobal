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
  const [emailerrors, setemailErrors] = useState([]);
  const [passerrors, setpassErrors] = useState([]);
  const [message, setMessage] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const emailerrors = [];
    const passerrors = [];
    if (!formData.email) {
      emailerrors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      emailerrors.push("Email address is invalid");
    }
    //setemailErrors(emailerrors);
    if (!formData.password) {
      passerrors.push("Password is required");
    } else {
      const password = formData.password;
      if (password.length < 8) {
        passerrors.push("Password must be at least 8 characters long");
      }  if (!/[a-z]/.test(password)) {
        passerrors.push("Password must contain at least one lowercase letter");
      }  if (!/[A-Z]/.test(password)) {
        passerrors.push("Password must contain at least one uppercase letter");
      }  if (!/[0-9]/.test(password)) {
        passerrors.push("Password must contain at least one number");
      }  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passerrors.push("Password must contain at least one special character");
      }
    }
    return {emailerrors , passerrors};
    //setpassErrors(passerrors)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {emailerrors  , passerrors} = validate();
    setemailErrors(emailerrors)
    setpassErrors(passerrors)
    //console.log(emailerrors , passerrors)
    if (emailerrors.length === 0 && passerrors.length ===0) {
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
                  <Form.Label style={{ color: "#DAA520" }}>Email</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#1F603C",
                      borderColor: "#DAA520",
                      padding: "10px",
                      color: "white",
                    }}
                    type="email"
                    placeholder="Enter your email "
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {emailerrors && emailerrors.length >0 &&(
                    <div style={{ color: "white" }}>{"*"+emailerrors}</div>
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
                    passerrors.map((error) => (
                      <div style={{ color: "white"  }} key={error}>*{error}</div>
                    ))}
                </Form.Group>
                {message && (
                  <Alert variant="danger" style={{ textAlign: "center" }}>
                    {message}
                  </Alert>
                )}
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
