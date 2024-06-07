import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import ProductPageIntroduction from '../Our_Product_Introduction/ProductIntroduction';

const ProductPage = ({ selected }) => {
  const [selectedCategory, setSelectedCategory] = useState(selected ?? 'Cereals');
  const productCards = [
    // ... (your product cards array)
    { category: 'Yellow', imageUrl: 'https://placehold.co/250x250', name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/250x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/250x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/350x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/350x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/350x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/350x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/350x250", name: 'Name' },
    { category: 'Yellow', imageUrl: "https://placehold.co/350x250", name: 'Name' },
  ];

  const categoryCounts = productCards.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryCounts);

  const filteredProducts = productCards.filter((product) => product.category === selectedCategory);

  const styles = {
    container: {
      padding: '20px',
      height: '100%',
    },
    categoryCard: {
      borderRadius: '10px',
      width: '100%'
    },
    categoryButton: {
      color: '#fff',
      borderRadius: '5px',
      border: 'none',
      padding: '5px 10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    activeCategoryButton: {
      color: '#fff',
    },
    scrollable: {
      maxHeight: '70vh',
      overflowY: 'auto',
    },
    // verticalDivider: {
    //   border: '1px solid #fff',
    //   height: '100%',
    //   width: '1px'
    // },
  };

  return (
    <Container>
      <ProductPageIntroduction 
        imageURL={"https://placehold.co/350x250"} 
        title={"Our Products"}
        text={"Explore our wide range of high-quality cereals, pulses, spices, and specialty items sourced from the finest producers around the world."}
      />
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={3} sm={12} className="pr-md-4" style={{ display: 'flex' }}>
            <div style={styles.categoryCard}>
              <h3 className="mb-3" style={{ color: '#fff' }}>Categories</h3>
              {categories.map((category) => (
                <Row key={category} className="justify-content-center">
                  <Col xs={12}>
                    <Button
                      variant="outline-light"
                      style={selectedCategory === category ? { backgroundColor: 'rgba(23, 72, 45, 1)', ...styles.categoryButton, ...styles.activeCategoryButton } : styles.categoryButton}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                      <span>({categoryCounts[category]})</span>
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>
            <Col xs={1} className="d-none d-md-block vertical-divider" style={styles.verticalDivider} />
          </Col>
          <Col xs={12} md={9}>
            <Row className="mt-4 justify-content-center" style={styles.scrollable}>
              {filteredProducts.map((product, index) => (
                <Col key={index} xs={6} md={4} className="mb-4 d-flex justify-content-center">
                  <ProductCard imageUrl={product.imageUrl} name={product.name} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductPage;