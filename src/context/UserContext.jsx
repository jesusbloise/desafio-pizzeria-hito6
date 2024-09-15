import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook personalizado para acceder al contexto
export const useUser = () => useContext(UserContext);

// Proveedor del contexto que envuelve a la aplicación
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Aquí almacenas el token
  
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

