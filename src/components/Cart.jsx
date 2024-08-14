// import React, { useState } from 'react';
// import pizzaCart from '../data/pizzas'; // Asegúrate de ajustar la ruta según tu estructura de archivos
// import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

// const Cart = () => {
//   const [cart, setCart] = useState(pizzaCart);

//   const increaseQuantity = (id) => {
//     setCart(cart.map(pizza =>
//       pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
//     ));
//   };

//   const decreaseQuantity = (id) => {
//     setCart(cart.map(pizza =>
//       pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
//     ).filter(pizza => pizza.quantity > 0));
//   };

//   const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Tu Carrito</h2>
//       {cart.length === 0 ? (
//         <p>Tu carrito está vacío.</p>
//       ) : (
//         <ListGroup>
//           {cart.map(pizza => (
//             <ListGroupItem key={pizza.id}>
//               <Card style={{ margin: '10px' }}>
//                 <Card.Img variant="top" src={pizza.img} />
//                 <Card.Body>
//                   <Card.Title>{pizza.name}</Card.Title>
//                   <Card.Text>
//                     <strong>Precio:</strong> ${pizza.price.toLocaleString()}
//                   </Card.Text>
//                   <Card.Text>
//                     <strong>Cantidad:</strong> {pizza.quantity}
//                   </Card.Text>
//                   <div className="d-flex justify-content-between">
//                     <Button variant="danger" onClick={() => decreaseQuantity(pizza.id)}>-</Button>
//                     <Button variant="success" onClick={() => increaseQuantity(pizza.id)}>+</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </ListGroupItem>
//           ))}
//         </ListGroup>
//       )}
//       <h3>Total: ${total.toLocaleString()}</h3>
//       <Button variant="primary" disabled={cart.length === 0}>
//         Pagar
//       </Button>
//     </div>
//   );
// };

// export default Cart;
