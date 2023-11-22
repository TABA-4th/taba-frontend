import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Register_success = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1423 });
  const isDesktop = useMediaQuery({ minWidth: 1424 });

  return (
    <>
    <div>
    <br/>회원가입에 성공하셨습니다!<br/><br/>
        로그인하러 가세요.<br/>
    </div>
    <Link to='/login'><br/>클릭해서 로그인 창으로 이동<br/></Link>
    </>
  );
}

export default Register_success;
