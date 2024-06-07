import React from 'react';
import Achievement from './Achievement';
import { Container, Row, Col } from 'react-bootstrap';

const achievements = [
  { title: 'Projects Completed', value: 89 },
  { title: 'Happy Clients', value: 120 },
  { title: 'Countries Served', value: 25 },
];

const AllAchievement = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center text-white display-4 fw-bold mb-4">Our Achievements</h2>
      <Row className="justify-content-center gap-4 px-5">
        {achievements.map((achievement, index) => (
          <Col md={4} key={index}>
            <Achievement {...achievement} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllAchievement;
