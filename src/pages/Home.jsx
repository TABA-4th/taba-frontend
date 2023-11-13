import React from 'react';
import { useMediaQuery } from 'react-responsive';


const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <div >
      {isMobile && (
        <div style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px' }}>
          <h2>Home - Mobile View</h2>
          <p>This is the content for smaller screens.</p>
        </div>
      )}
      {isTablet && (
        <div style={{ backgroundColor: '#e67e22', color: 'white', padding: '20px' }}>
          <h2>Home - Tablet View</h2>
          <p>This is the content for medium-sized screens.</p>
        </div>
      )}
      {isDesktop && (
        <div style={{ backgroundColor: '#3498db', color: 'white', padding: '30px' }}>
          <h2>Home - Desktop View</h2>
          <p>This is the content for larger screens.</p>
        </div>
      )}
    </div>
  );
}

export default Home;
