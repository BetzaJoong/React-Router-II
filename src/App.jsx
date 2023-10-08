import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Buscador from './components/Buscador';
import Pokedex from './views/Pokedex';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Buscador />} />
          <Route path="/pokemones/:name" element={<Pokedex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;








