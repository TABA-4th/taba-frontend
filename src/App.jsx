import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import WishlistPage from './pages/WishlistPage';
import Magazine from './pages/Magazine';
import Survey from './pages/Survey';
import SignupForm from './pages/Signup';
import CalendarPage from './pages/CalendarPage';


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
              <Route path="/calendar" element={<CalendarPage/>} />
              <Route path="/magazine" element={<Magazine/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/wishlist" element={<WishlistPage/>}/>
              <Route path="/survey" element={<Survey/>}/>
              <Route path="/signup" element={<SignupForm />}/>
            </Routes>
          </div>
        </Router>
        </div>
      </div>
    </div>
  );
}

export default App;