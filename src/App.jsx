// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Profile from './components/Profile';
import Pizza from './pages/Pizza';
import { UserProvider, useUser } from './context/UserContext'; // Importamos el UserProvider y el hook
import ProtectedRoute from './routes/ProtectedRoute'; // Ajusta según la ubicación correcta


function App() {
  // const { token } = useUser(); // Accedemos al token para controlar el acceso a login/register
  const { token } = useUser() || {}; // Destructura token solo si useUser no es undefined

  return (
    <UserProvider>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

