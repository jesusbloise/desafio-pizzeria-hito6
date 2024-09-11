import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch(`http://localhost:5001/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error fetching pizza:", error));
  }, [id]);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", maxWidth: "400px", textAlign: "center" }}>
        <h2>{pizza.name}</h2>
        <img src={pizza.img} alt={pizza.name} style={{ width: "100%", borderRadius: "8px" }} />
        <p><strong>Precio:</strong> ${pizza.price}</p>
        <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
        <p><strong>Descripción:</strong> {pizza.desc}</p>
        <div style={{ marginTop: "20px" }}>
         
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Regresar a Home
          </button>
           <button
            style={{
              backgroundColor: "#008CBA",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              margin: "10px 5px",
            }}
            onClick={() => addToCart(pizza)} 
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;

