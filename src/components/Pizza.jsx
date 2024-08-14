
//hito 4
import React, { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error fetching pizza:", error));
  }, []);

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
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button onClick={() => setShowDescription(!showDescription)} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
            {showDescription ? "Ocultar descripción" : "Ver más"}
          </button>
          <button style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
            Añadir al carrito
          </button>
        </div>
        {showDescription && <p style={{ marginTop: "20px" }}>{pizza.desc}</p>}
      </div>
    </div>
  );
};

export default Pizza;


