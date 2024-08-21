import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;



