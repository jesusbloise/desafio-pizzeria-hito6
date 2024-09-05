import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Profile from './components/Profile';
import Pizza from './pages/Pizza';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pizza/:id" element={<Pizza />} /> {/* Ruta dinámica para Pizza */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MyNavbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import NotFound from './pages/NotFound';
// import Header from './components/Header'
// import Profile from './components/Profile';
// import Pizza from './pages/Pizza'


// function App() {
//   return (
//     <Router>
//       <MyNavbar />
//       <Routes>
//         <Route path="/header" element={<Header />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/pizza" element={<Pizza />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



