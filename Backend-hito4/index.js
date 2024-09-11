import cors from "cors";
import "dotenv/config";
import express from "express";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import pizzaRoute from "./routes/pizza.route.js";
import userRoutes from "./routes/userRoutes.js"; // Ruta para usuarios

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizzaRoute);
app.use("/api/checkouts", checkoutRoute);
app.use("/api/users", userRoutes); // Añadido para manejar rutas de usuario

// Manejo de errores
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


// import cors from "cors";
// import "dotenv/config";
// import express from "express";

// import authRoute from "./routes/auth.route.js";
// import checkoutRoute from "./routes/checkout.route.js";
// import pizzaRoute from "./routes/pizza.route.js";
// import userRoutes from "./routes/userRoutes.js"; // Asegúrate de que esta ruta sea correcta

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Rutas
// app.use("/api/auth", authRoute);
// app.use("/api/pizzas", pizzaRoute);
// app.use("/api/checkouts", checkoutRoute);
// app.use("/api/users", userRoutes); // Añadido para manejar rutas de usuario

// // Manejo de errores
// app.use((_, res) => {
//   res.status(404).json({ error: "Not Found" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });


// // import cors from "cors";
// // import "dotenv/config";
// // import express from "express";

// // import authRoute from "./routes/auth.route.js";
// // import checkoutRoute from "./routes/checkout.route.js";
// // import pizzaRoute from "./routes/pizza.route.js";
// // import userRoutes from "./routes/userRoutes.js"; // Asegúrate de que esta ruta sea correcta

// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Rutas
// // app.use("/api/auth", authRoute);
// // app.use("/api/pizzas", pizzaRoute);
// // app.use("/api/checkouts", checkoutRoute);
// // app.use("/api/users", userRoutes); // Añadido para manejar rutas de usuario

// // // Manejo de errores
// // app.use((_, res) => {
// //   res.status(404).json({ error: "Not Found" });
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port http://localhost:${PORT}`);
// // });
