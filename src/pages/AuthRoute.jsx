import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../functions/AuthContext";

const AuthRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log('before'+isLoggedIn)
  if (!isLoggedIn) {
    // 로그인하지 않은 사용자는 로그인 페이지로 리디렉션
    return <Navigate to="/login" />;
  }
  console.log('After'+isLoggedIn)

  // 로그인한 사용자는 해당 컴포넌트를 렌더링
  return children;
};

export default AuthRoute;
