import React, { createContext, useState } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 세션 스토리지에 accessToken이 있으면 로그인 상태로 시작
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("accessToken"));

  const login = () => {
    setIsLoggedIn(true);
    console.log("login status is true")
  };

  const logout = () => {
  // 세션 스토리지에서 모든 항목 삭제
  sessionStorage.clear();

  // js-cookie를 사용하여 쿠키 삭제
  Cookies.remove('access-token');
  Cookies.remove('refresh-token');
<<<<<<< HEAD
=======
  Cookies.remove('nickname');
>>>>>>> 3edfa6ce3e9d6f15bcbc0184235594d6381575a3
  console.log("login status is false")
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};