// Muestra las pizzas agregadas al carrito, permite ajustar cantidades y muestra el total.
import React from 'react';
import { Modal, Button, ListGroup, Image } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useBootstrapMinBreakpoint } from 'react-bootstrap/esm/ThemeProvider'

const CartModal = ({ show, handleClose }) => {
  const { cartItems, getTotal, addToCart, removeFromCart } = useCart();

  const formatTotal = (amount) => {
    return amount.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tu Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Image src={item.img} alt={item.name} width={50} height={50} className="mr-3" />
                  <div>
                    <h5>{item.name}</h5>
                    <p>{formatTotal(item.price)} x {item.quantity}</p>
                  </div>
                </div>
                <div>
                  <Button variant="secondary" size="sm" onClick={() => removeFromCart(item.id)}>-</Button>
                  <Button variant="secondary" size="sm" onClick={() => addToCart(item)}>+</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <h5>Total: {formatTotal(getTotal())}</h5>
        <Button variant="primary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
