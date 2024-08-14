import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const MyNavbar = () => {
  const { getTotal } = useCart();
  const [showCart, setShowCart] = React.useState(false);

  const formatTotal = (amount) => {
    return amount.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
          </Nav>
          <Button variant="primary" style={{ marginLeft: "auto" }} onClick={() => setShowCart(true)}>
            🛒 Total: {formatTotal(getTotal())}
          </Button>
          <CartModal show={showCart} handleClose={() => setShowCart(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

