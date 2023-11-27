import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WishlistPage from "./pages/WishlistPage";
import Magazine from "./pages/Magazine";
import CalendarPage from "./pages/CalendarPage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Register_success from "./pages/Register_success";
import SurveyPage from "./pages/Survey";  
import { AuthProvider } from "./functions/AuthContext";
import AuthRoute from "./pages/AuthRoute";
import Empty from "./pages/empty";

function App() {
  return (
    <AuthProvider>
      <div className="wrap">
        <Router>
          <Navbar />
          <div className="main-contents">
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/calender"
                  element={
                    <AuthRoute>
                      <CalendarPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/magazine"
                  element={
                    <AuthRoute>
                      <Magazine />
                    </AuthRoute>
                  }
                />
                <Route 
                  path="/survey" 
                  element={
                    <AuthRoute>
                      <SurveyPage />
                    </AuthRoute>
                  } 
                />
                <Route
                  path="/wishlist"
                  element={
                    <AuthRoute>
                      <WishlistPage />
                    </AuthRoute>
                  }
                />

                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/register_success"
                  element={<Register_success />}
                />
                <Route path="/empty" element={ <AuthRoute><Empty/> </AuthRoute>}  />
                <Route path="*" element={<NotFound />} />
              </Routes >
              
            </div>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
