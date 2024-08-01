// src/components/CardPizza.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${price.toLocaleString()}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="secondary">Ver más</Button>
          <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Agregar al carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
