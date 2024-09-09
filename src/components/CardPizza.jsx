import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</Card.Text>
        <Button onClick={() => addToCart(pizza)}>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;


