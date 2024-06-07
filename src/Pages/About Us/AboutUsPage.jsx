import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Button from "../../Components/Button/Button";
const AboutUsPage = () => {
  const styles = {
    textWhite: {
      color: "#FFF",
    },
    learnMoreBtn: {
      backgroundColor: "#ea830e",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      fontSize: "1em",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <Container className="mt-5">
      {/* Top Part */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <div className="text-center text-md-start" style={styles.textWhite}>
            <h1 className="mb-3">Grains Global</h1>
            <h2 className="mb-4">Connecting the World with Quality Grains</h2>
            <p className="mb-4">
              Grains Global is a leading exporter and importer of cereals,
              pulses, and spices, delivering high-quality products to customers
              worldwide.
            </p>
          <Button text="Contact Us" redirect="contact" />
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/500"
              alt="Placeholder"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Col>
      </Row>

      {/* Middle Part */}
      <Row className="align-items-start mb-5">
        <Col md={6} className="d-flex flex-column">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#FFF" }}>
            Nourishing the Earth, Nourishing You
          </h2>
          <p className="lead mt-4" style={{ color: "#FFF" }}>
            At Organic Harvest, our mission is to provide high-quality, organic,
            and sustainably sourced natural foods that nourish both the body and
            the planet. We believe in honoring the earth and supporting ethical,
            regenerative agriculture.
          </p>
        </Col>
        <Col md={6} className="d-flex flex-column">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#FFF" }}>
            Rooted in Sustainability
          </h2>
          <ListGroup variant="flush" className="mt-4">
            <ListGroup.Item
              className="mb-3"
              style={{ backgroundColor: "transparent", color: "#FFF" }}
            >
              <i className="fas fa-check-circle text-success me-2"></i>
              <strong>Organic and Sustainable</strong>
              <p className="mt-2" style={{ color: "#FFF" }}>
                We prioritize organic, regenerative farming practices that
                nourish the soil and minimize environmental impact.
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              className="mb-3"
              style={{ backgroundColor: "transparent", color: "#FFF" }}
            >
              <i className="fas fa-check-circle text-success me-2"></i>
              <strong>Ethical Sourcing</strong>
              <p className="mt-2" style={{ color: "#FFF" }}>
                We work closely with local farmers and producers who share our
                commitment to fair labor practices and environmental
                stewardship.
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: "transparent", color: "#FFF" }}
            >
              <i className="fas fa-check-circle text-success me-2"></i>
              <strong>Community Focused</strong>
              <p className="mt-2" style={{ color: "#FFF" }}>
                We strive to be a positive force in our local communities,
                supporting initiatives that promote health, wellness, and
                sustainable living.
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Bottom Part */}
      <Row className="mt-5">
        <Col md={12} className="text-center mb-4">
          <h2 style={{ color: "#FFF" }}>Meet the Team</h2>
          <p style={{ color: "#FFF" }}>
            Our team of passionate, dedicated individuals are the heart and soul
            of Organic Harvest. Get to know the people behind our mission to
            promote sustainable agriculture and healthy eating.
          </p>
        </Col>
        <Row>
          <Col md={4}>
            <Card
              className="text-center mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Sarah Johnson"
                className="rounded-circle mx-auto mt-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#FFF" }}>Sarah Johnson</Card.Title>
                <Card.Text style={{ color: "#FFF" }}>
                  <p>
                    <strong>Co-Founder & CEO</strong>
                  </p>
                  <p>
                    Sarah is the visionary behind Organic Harvest. With a
                    background in sustainable agriculture, she is passionate
                    about bringing fresh, organic produce to her local
                    community.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="John Doe"
                className="rounded-circle mx-auto mt-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#FFF" }}>John Doe</Card.Title>
                <Card.Text style={{ color: "#FFF" }}>
                  <p>
                    <strong>Co-Founder & COO</strong>
                  </p>
                  <p>
                    John brings his expertise in business operations and
                    logistics to Organic Harvest. He is dedicated to ensuring
                    that our produce is delivered fresh and on time to our
                    customers.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Lisa Martinez"
                className="rounded-circle mx-auto mt-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#FFF" }}>Lisa Martinez</Card.Title>
                <Card.Text style={{ color: "#FFF" }}>
                  <p>
                    <strong>Head of Sustainability</strong>
                  </p>
                  <p>
                    Lisa is our resident expert on sustainable agriculture and
                    environmental stewardship. She works closely with our
                    network of organic farmers to ensure that our practices are
                    eco-friendly and beneficial to the land.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
