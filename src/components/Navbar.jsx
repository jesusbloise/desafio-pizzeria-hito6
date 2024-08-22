

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const MyNavbar = () => {
  const { total } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [formattedTotal, setFormattedTotal] = useState();

  // Función para formatear el total
  const formatTotal = (amount) => {
    return amount.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
  };

  // Actualizar el estado del total formateado cada vez que `total` cambie
  useEffect(() => {
    setFormattedTotal(formatTotal(total));
  }, [total]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
            <Nav.Link as={Link} to="/login">🍕 Login</Nav.Link>
            <Nav.Link as={Link} to="/register">🍕 Register</Nav.Link>
          </Nav>
          <Button variant="primary" style={{ marginLeft: "auto" }} onClick={() => setShowCart(true)}>
            🛒 Total: {formattedTotal}
          </Button>
          <CartModal show={showCart} handleClose={() => setShowCart(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

