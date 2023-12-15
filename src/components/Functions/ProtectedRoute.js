import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'components/Functions/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

 
  // ProtectedRoute로 감싸진 페이지 접속시 sessionStorage와 cookie 에 있는 access , refresh token 을 갱신
  useEffect(() => {
      const refreshTokens = async () => {
          const refreshToken = Cookies.get('refresh-token');
          const accessToken = Cookies.get('access-token')
      
          let headers = {
            Authorization: `Bearer ${accessToken}`,
          };
      
          if (refreshToken) {

            try {
              const response = await axios.post(
                `http://13.113.206.129:8081/user/reissue?refreshToken=${refreshToken}`,
                null,
                {
                  headers: headers,
                }
              );

              const { accessToken, refreshToken: newRefreshToken } = response.data;

              Cookies.set('refresh-token', newRefreshToken, { path: '/' });
              Cookies.set('access-token', accessToken, { path: '/' });

              sessionStorage.setItem('accessToken', accessToken);
              sessionStorage.setItem('refreshToken', newRefreshToken);

            } catch (error) {
              console.error('Token reissue failed:', error);
            }
          }
    };

        if (isLoggedIn) {
          refreshTokens();
          const intervalId = setInterval(refreshTokens, 60*60*25); // 25분 간격으로 토큰 갱신
          return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
        }

  }, [isLoggedIn]);
  




  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;