
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "components/Functions/AuthContext";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage";
import CalendarPage from "views/examples/CalendarPage";
import SurveyPage from "views/examples/SurveyPage";
import HaircareProductPage from "views/examples/HaircareProductPage";
import FileUploaderPage from "views/examples/FileUploaderPage";
import ResultPage from "views/examples/ResultPage";
import MagazinePage from 'views/examples/MagazinePage';

import PublicRoute from "components/Functions/PublicRoute";
import ProtectedRoute from "components/Functions/ProtectedRoute";
import AboutPage from "views/examples/AboutPage";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/mypage" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
      <Route path="/file-upload" element={<ProtectedRoute><FileUploaderPage /></ProtectedRoute>} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/magazine" element={<MagazinePage/>} />

      <Route path="/survey" element={<ProtectedRoute><SurveyPage/></ProtectedRoute>}/>
      <Route path="/product" element={<HaircareProductPage/>}/>

      <Route path="/about" element={<AboutPage></AboutPage>}/>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
);

