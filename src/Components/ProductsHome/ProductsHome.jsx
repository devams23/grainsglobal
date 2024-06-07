import React from 'react';
import ProductsHomeCard from './ProductsHomeCard';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  { title: 'Cereals', image: 'one.jpg', link: 'products/cereals' },
  { title: 'Pulses', image: 'two.jpg', link: 'products/pulses' },
  { title: 'Spieces', image: 'three.jpg', link: 'products/spieces' },
  // Add more products as needed
];

const ProductsHome = () => {
  return (
    <Container className="mt-4 mb-4">
      <h2 className="text-center text-white display-6 fw-bold mb-4 ">Our Products</h2>
      <Row className="justify-content-center gap-4 px-5">
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductsHomeCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsHome;
