import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]); 
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:5000/api/users") 
      .then((response) => response.json())
      .then((data) => {
    
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("La API no devolvió un array:", data);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const validUser = users.find((user) => user.email === email && user.password === password);

    if (validUser) {
      setMessage('Inicio de sesión exitoso!');
      navigate('/Profile', { state: { email: validUser.email } }); 
    } else {
      setMessage('Credenciales incorrectas. Redirigiendo a registro...');
      setTimeout(() => {
        navigate('/Register'); 
      }, 2000);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Inicio de Sesión</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
              </form>
              {message && <p className="mt-3 text-center">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

