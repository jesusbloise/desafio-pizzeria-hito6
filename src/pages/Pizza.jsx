import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Asegúrate de ajustar la ruta según sea necesario

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el id de la pizza desde los parámetros de la URL
  const { addToCart } = useCart(); // Obtener la función addToCart del contexto

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
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
        {/* Mostrar la descripción directamente debajo de los ingredientes */}
        <p><strong>Descripción:</strong> {pizza.desc}</p>
        <div style={{ marginTop: "20px" }}>
         
          {/* Botón de Regresar a Home */}
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
           {/* Botón de Añadir al carrito */}
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
            onClick={() => addToCart(pizza)} // Aquí agregas la funcionalidad del carrito
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;


// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const Pizza = () => {
//   const [pizza, setPizza] = useState(null);
//   const navigate = useNavigate();
//   const { id } = useParams(); // Obtener el id de la pizza desde los parámetros de la URL

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/pizzas/${id}`)
//       .then((response) => response.json())
//       .then((data) => setPizza(data))
//       .catch((error) => console.error("Error fetching pizza:", error));
//   }, [id]);

//   if (!pizza) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//       <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", maxWidth: "400px", textAlign: "center" }}>
//         <h2>{pizza.name}</h2>
//         <img src={pizza.img} alt={pizza.name} style={{ width: "100%", borderRadius: "8px" }} />
//         <p><strong>Precio:</strong> ${pizza.price}</p>
//         <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
//         {/* Mostrar la descripción directamente debajo de los ingredientes */}
//         <p><strong>Descripción:</strong> {pizza.desc}</p>
//         <div style={{ marginTop: "20px" }}>
//           {/* Botón de Regresar a Home */}
//           <button
//             style={{
//               backgroundColor: "#008CBA",
//               color: "white",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               margin: "10px 5px",
//             }}
//             onClick={() => addToCart(pizza)}  // Aquí puedes agregar la funcionalidad del carrito
//           >
//             Añadir al carrito
//           </button>
//           <button
//             onClick={() => navigate("/")}
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "white",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Regresar a Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pizza;


// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // const Pizza = () => {
// //   const { id } = useParams(); // Obtener el id de la URL
// //   const [pizza, setPizza] = useState(null);
// //   const [showDescription, setShowDescription] = useState(false);

// //   useEffect(() => {
// //     fetch(`http://localhost:5000/api/pizzas/${id}`)
// //       .then((response) => response.json())
// //       .then((data) => setPizza(data))
// //       .catch((error) => console.error("Error fetching pizza:", error));
// //   }, [id]);

// //   if (!pizza) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// //       <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", maxWidth: "400px", textAlign: "center" }}>
// //         <h2>{pizza.name}</h2>
// //         <img src={pizza.img} alt={pizza.name} style={{ width: "100%", borderRadius: "8px" }} />
// //         <p><strong>Precio:</strong> ${pizza.price}</p>
// //         <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
// //         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
// //           <button onClick={() => setShowDescription(!showDescription)} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
// //             {showDescription ? "Ocultar descripción" : "Ver más"}
// //           </button>
// //           <button style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
// //             Añadir al carrito
// //           </button>
// //         </div>
// //         {showDescription && <p style={{ marginTop: "20px" }}>{pizza.desc}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Pizza;

// // // //hito 4
// // // import React, { useState, useEffect } from "react";

// // // const Pizza = () => {
// // //   const [pizza, setPizza] = useState(null);
// // //   const [showDescription, setShowDescription] = useState(false);

// // //   useEffect(() => {
// // //     fetch("http://localhost:5000/api/pizzas/p001")
// // //       .then((response) => response.json())
// // //       .then((data) => setPizza(data))
// // //       .catch((error) => console.error("Error fetching pizza:", error));
// // //   }, []);

// // //   if (!pizza) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   return (
// // //     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// // //       <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", maxWidth: "400px", textAlign: "center" }}>
// // //         <h2>{pizza.name}</h2>
// // //         <img src={pizza.img} alt={pizza.name} style={{ width: "100%", borderRadius: "8px" }} />
// // //         <p><strong>Precio:</strong> ${pizza.price}</p>
// // //         <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
// // //         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
// // //           <button onClick={() => setShowDescription(!showDescription)} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
// // //             {showDescription ? "Ocultar descripción" : "Ver más"}
// // //           </button>
// // //           <button style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
// // //             Añadir al carrito
// // //           </button>
// // //         </div>
// // //         {showDescription && <p style={{ marginTop: "20px" }}>{pizza.desc}</p>}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Pizza;


