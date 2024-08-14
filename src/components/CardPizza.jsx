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



// import React from 'react';
// import { useCart } from '../context/CartContext'; // Ajusta la ruta según tu estructura

// const CardPizza = ({ id, name, price, img, ingredients }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="card">
//       <img src={img} alt={name} />
//       <h3>{name}</h3>
//       <p>{price}</p>
//       <button onClick={() => addToCart({ id, name, price, img, ingredients })}>
//         Agregar al carrito
//       </button>
//     </div>
//   );
// };

// export default CardPizza;


// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// const CardPizza = ({ name, price, ingredients, img, desc }) => {
//   const [showDesc, setShowDesc] = useState(false);

//   const toggleDescription = () => {
//     setShowDesc(!showDesc);
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={img} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           <strong>Ingredientes:</strong> {ingredients.join(', ')}
//         </Card.Text>
//         <Card.Text>
//           <strong>Precio:</strong> ${price.toLocaleString()}
//         </Card.Text>
//         {showDesc && (
//           <Card.Text>
//             <strong>Descripción:</strong> {desc}
//           </Card.Text>
//         )}
//         <div className="d-flex justify-content-between">
//           <Button variant="secondary" onClick={toggleDescription}>
//             {showDesc ? 'Ver menos' : 'Ver más'}
//           </Button>
//           <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
//             Agregar al carrito
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CardPizza;



// import React from "react";
// import { Card, Button } from "react-bootstrap";

// const CardPizza = ({ name, price, ingredients, img }) => {
//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={img} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           <strong>Ingredientes:</strong> {ingredients.join(', ')}
//         </Card.Text>
//         <Card.Text>
//           <strong>Precio:</strong> ${price.toLocaleString()}
//         </Card.Text>
//         <div className="d-flex justify-content-between">
//           <Button variant="secondary">Ver más</Button>
//           <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Agregar al carrito</Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CardPizza;
