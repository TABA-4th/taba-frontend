import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/wishlist" element={<WishlistPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;