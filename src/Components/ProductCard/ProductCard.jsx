import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

function ProductCard({ imageUrl, name }) {
  const styles = {
    card: {
      border: '1px solid #438569',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      backgroundColor: '#226B43',
      textAlign: 'center', // Ensure text is centered
    },
    productImage: {
      borderRadius: '10px',
      width: '100%',
      height: '200px', // Fixed height
      objectFit: 'cover',
      marginBottom: '10px', // Add margin to separate image from text
    },
  };

  return (
    <Card style={styles.card}>
      <Image src={imageUrl} alt={name} style={styles.productImage} fluid />
      <h4 style={{ color: '#fff' }} className="text-center mt-3">
        {name}
      </h4>
      <Button
        style={{ color: '#fff', backgroundColor: 'rgba(39, 37, 37, 0.26)' }}
        variant="outline-light"
        className="w-100"
      >
        Add to cart
      </Button>
    </Card>
  );
}

export default ProductCard;