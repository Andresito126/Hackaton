import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hoteles from './pages/Hoteles';
import Restaurants from './pages/Restaurants';
import TouristZones from './pages/TouristZones';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoteles" element={<Hoteles />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/tourist-zones" element={<TouristZones />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
