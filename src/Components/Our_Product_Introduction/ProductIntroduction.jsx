import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ProductPageIntroduction = ({imageURL, title, text}) => {
  return (
    <Container style={{color: '#fff'}}>
      <Row style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',}}>
        <Col xs={12} md={6} sm = {6} className="py-5">
          <h1 style={{fontSize: '2rem'}}>{title}</h1>
          <p style={{fontSize: '1.3rem'}}>{text}</p>
        </Col>
        <Col xs={12} md={6} style={{padding: '20px'}} className="text-center text-md-right">
          <Image src={imageURL} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPageIntroduction;