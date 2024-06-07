import React from "react";
import { Card } from 'react-bootstrap';

function Achievement({ title, value }) {
  return (
    <Card className="text-center">
      <Card.Body>
        <div>
          
          <h2 className="border-bottom pb-3">{value}+</h2>
        </div>
        <Card.Text className="w-100">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Achievement;