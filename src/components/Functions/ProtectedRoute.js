import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'components/Functions/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
    return <Navigate to="/login" />;
  }

  // 인증된 사용자에게 children 컴포넌트 렌더링
  return children;
};

export default ProtectedRoute;
