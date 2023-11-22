import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import WishlistPage from './pages/WishlistPage';
import Calender from './pages/Calender';
import Magazine from './pages/Magazine';
import Survey from './pages/Survey';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Register_success from './pages/Register_success';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그아웃 처리
    const handleLogout = () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setIsLoggedIn(false);
    };
  

  return (
    <div className='wrap'>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <div className="main-contents">
          <div className='content'>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
                <Route path="/calender" element={isLoggedIn ? <Calender/> : <Navigate to="/" />} />
                <Route path="/magazine" element={isLoggedIn ? <Magazine/> : <Navigate to="/" />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/wishlist" element={isLoggedIn ? <WishlistPage/> : <Navigate to="/" />} />
                <Route path="/survey" element={isLoggedIn ? <Survey/> : <Navigate to="/" />} />
                <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />} />
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/register_success" element={<Register_success/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;