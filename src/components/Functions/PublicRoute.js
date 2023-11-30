import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'components/Functions/AuthContext';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    // 이미 인증된 사용자는 홈페이지 또는 다른 페이지로 리다이렉트
    return <Navigate to="/" />;
  }

  // 인증되지 않은 사용자에게 children 컴포넌트 렌더링
  return children;
};

export default PublicRoute;
