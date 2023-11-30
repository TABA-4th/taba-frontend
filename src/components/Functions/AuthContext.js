import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 세션 스토리지에 accessToken이 있으면 로그인 상태로 시작
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("accessToken"));

  const login = () => {
    setIsLoggedIn(true);
    console.log("login status is true")
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("nickname"); // 닉네임도 세션 스토리지에서 제거
    setIsLoggedIn(false);
    console.log("login status is false")
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
