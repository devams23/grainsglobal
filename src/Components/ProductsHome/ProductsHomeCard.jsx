import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductsHomeCard({ title, image, link }) {
  const styles = {
    card: {

      marginBottom: '1rem',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform 0.2s ease-in-out',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    image: {
      height: '150px',
      objectFit: 'cover',
    }
  };

  return (
    <Card
      className="text-center"
      style={styles.card}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img variant="top" src={image} alt={title} style={styles.image} />
        <Card.Body>
          <Card.Text className="w-100">{title}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductsHomeCard;
