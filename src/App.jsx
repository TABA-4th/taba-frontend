import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import WishlistPage from './pages/WishlistPage';
import Calender from './pages/Calender';
import Magazine from './pages/Magazine';
import Survey from './pages/Survey';

function App() {
  return (
    <div className='wrap'>
      <div className="main-contents">
        <div className='content'>
        <Router>
          <Navbar/>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/calender" element={<Calender/>} />
              <Route path="/magazine" element={<Magazine/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/wishlist" element={<WishlistPage/>}/>
              <Route path="/survey" element={<Survey/>}/>
            </Routes>
          </div>
        </Router>
        </div>
      </div>
    </div>
  );
}

export default App;