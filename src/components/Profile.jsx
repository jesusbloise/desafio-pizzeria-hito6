import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtenemos el estado pasado en la navegación
  const { email } = location.state || {}; // Extraemos el email del estado, si existe

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">¡Bienvenido al Perfil!</h2>
              {email && (
                <p className="text-center mt-3">Correo electrónico: {email}</p>
              )}
              <button
                className="btn btn-primary btn-block mt-4"
                onClick={() => navigate('/')}
              >
                Ir al Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
