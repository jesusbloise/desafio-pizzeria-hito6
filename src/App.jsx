import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import PizzaList from "./components/PizzaList";
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <MyNavbar />
          <PizzaList />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MyNavbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Register from './components/Register';
// import Login from './components/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Pizza from "./components/Pizza";
// import PizzaList from "./components/PizzaList";

// function App() {
//   return (
//     <Router>
//       <div>
//         <MyNavbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/pizza" element={<PizzaList />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           {/* Agrega otras rutas aquí */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



// este es para el hito4
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MyNavbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Register from './components/Register';
// import Login from './components/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Pizza from "./components/Pizza";
// import PizzaList from "./components/PizzaList";



// function App() {
//   return (
//     <Router>
//       <div>
//         <MyNavbar />
//         {/* <Cart /> */}
//         <PizzaList/>
//         {/* <Home/> */}
//         {/* <Pizza/> */}
//         {/* <div className="App">
//           <h1 class="text-center">Formulario de Registro</h1>
//           <Register />
//           <h1 class="text-center">Formulario de Login.</h1>
//           <Login />
//         </div> */}
      
//         {/* <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes> */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
