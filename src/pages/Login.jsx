import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]); // Inicializa como un array vacío
  const navigate = useNavigate();

  // Hacemos la solicitud fetch al backend para obtener los usuarios
  useEffect(() => {
    fetch("http://localhost:5000/api/users") // Cambia esto por la ruta correcta de tu API
      .then((response) => response.json())
      .then((data) => {
        // Verificamos si la respuesta es un array antes de actualizar el estado
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

    // Validaciones básicas
    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Verificar si el email y la contraseña coinciden con algún usuario en el JSON
    const validUser = users.find((user) => user.email === email && user.password === password);

    if (validUser) {
      setMessage('Inicio de sesión exitoso!');
      navigate('/Profile', { state: { email: validUser.email } }); // Redirigir y pasar el email al componente Profile
    } else {
      setMessage('Credenciales incorrectas. Redirigiendo a registro...');
      setTimeout(() => {
        navigate('/Register'); // Redirigir a Registro después de un pequeño delay
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


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom'; // Necesitamos esto para la navegación

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Hook para la navegación

//   // Datos simulados (esto debería venir de una base de datos real)
//   const validUser = {
//     email: "test@test.com",
//     password: "123123",
//     id: "UYz_2Vy9rNw7uELQ7AZ8D"
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validaciones
//     if (!email || !password) {
//       setMessage('Todos los campos son obligatorios.');
//       return;
//     }

//     if (password.length < 6) {
//       setMessage('La contraseña debe tener al menos 6 caracteres.');
//       return;
//     }

//     // Verificar si las credenciales coinciden con las del usuario válido
//     if (email === validUser.email && password === validUser.password) {
//       setMessage('Inicio de sesión exitoso!');
//       navigate('/Profile'); // Redirigir a Profile
//     } else {
//       setMessage('Credenciales incorrectas. Redirigiendo a registro...');
//       setTimeout(() => {
//         navigate('/Register'); // Redirigir a Registro después de un pequeño delay
//       }, 2000);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center">Inicio de Sesión</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Email:</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Contraseña:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
//               </form>
//               {message && <p className="mt-3 text-center">{message}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Validaciones
// //     if (!email || !password) {
// //       setMessage('Todos los campos son obligatorios.');
// //       alert(message)
// //       return;
// //     }

// //     if (password.length < 6) {
// //       setMessage('La contraseña debe tener al menos 6 caracteres.');
// //       alert(message)
// //       return;
// //     }

// //     // Si todas las validaciones pasan
// //     setMessage('Inicio de sesión exitoso!');
// //     alert(message)
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div className="card">
// //             <div className="card-body">
// //               <h2 className="card-title text-center">Inicio de Sesión</h2>
// //               <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                   <label>Email:</label>
// //                   <input
// //                     type="email"
// //                     className="form-control"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Contraseña:</label>
// //                   <input
// //                     type="password"
// //                     className="form-control"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
// //               </form>
// //               {message && <p className="mt-3 text-center">{message}</p>}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
