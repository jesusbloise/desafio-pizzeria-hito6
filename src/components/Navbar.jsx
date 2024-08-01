import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const MyNavbar = () => {
  const total = 25000;
  const token = false;

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
            {token ? (
              <>
                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#login">🔐 Login</Nav.Link>
                <Nav.Link href="#register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          <Button variant="primary" style={{ marginLeft: "auto" }}>
            🛒 Total: {formatTotal(total)}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
