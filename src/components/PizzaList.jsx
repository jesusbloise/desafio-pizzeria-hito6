// este componente es el que nos muestra las card de las pizzas
// de la data pizzaslocales las organiza y muestra en card
// tambien tiene dos botones de ver mas y agregar al carrito

import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import pizzaslocal from '../data/pizzaslocal';
import { useCart } from '../context/CartContext'; // Importa el contexto del carrito
import pizzas from '../data/pizzaslocal'

const PizzaList = () => {
  const [showDescription, setShowDescription] = useState(null);
  const { addToCart } = useCart(); // Usamos la función addToCart del contexto

  const toggleDescription = (index) => {
    setShowDescription(showDescription === index ? null : index);
  };

  return (
    <Row>
      {pizzaslocal.map((pizza, index) => (
        <Col key={pizza.id} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>Ingredientes: {pizza.ingredients.join(', ')}</Card.Text>
              <Card.Text>Precio: {pizza.price}</Card.Text>
              {showDescription === index && (
                <Card.Text>
                  Descripción: {pizza.desc}
                </Card.Text>
              )}
              <Button variant="info" onClick={() => toggleDescription(index)}>
                {showDescription === index ? 'Ocultar descripción' : 'Ver más'}
              </Button>
              {' '}
              <Button variant="success" onClick={() => addToCart(pizza)}>
                Agregar al carro
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PizzaList;


// esto es el hito4
// import React from 'react';
// import CardPizza from './CardPizza';
// import pizzasData from '../data/pizzaslocal'; // Asegúrate de ajustar la ruta según tu estructura de archivos

// const PizzaList = () => {
//   return (
//     <div className="d-flex flex-wrap justify-content-center">
//       {pizzasData.map((pizza) => (
//         <CardPizza
//           key={pizza.id}
//           name={pizza.name}
//           price={pizza.price}
//           ingredients={pizza.ingredients}
//           img={pizza.img}
//           desc={pizza.desc}  
//         />
//       ))}
//     </div>
//   );
// };

// export default PizzaList;
