import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <div className="App">
          <h1 class="text-center">Formulario de Registro</h1>
          <Register />
          <h1 class="text-center">Formulario de Login.</h1>
          <Login />
        </div>
      
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
