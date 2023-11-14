import React from 'react';
import { useMediaQuery } from 'react-responsive';

const NotFound = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <div>
        <h1>잘못된 페이지 입니다!</h1>
    </div>
  );
}

export default NotFound;
