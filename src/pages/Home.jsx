import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <div >
      {isMobile && (
      <div>
        <Carousel className="imgList">
        <Paper> <img src='https://i.postimg.cc/ZYy40zqX/0c60c04f6b385.jpg
'></img> </Paper>
          <Paper> <img src='https://i.postimg.cc/MK2xQ3MH/8dffaf3717ddd.png
'></img> </Paper>
        </Carousel>
        
        <div style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px' }}>
          <h2>Home - Mobile View</h2>
          <p>This is the content for smaller screens.</p>
        </div>
        </div>
      )}
      {isTablet && (
        <div>
        <Carousel>
        <Paper> <img src='https://i.postimg.cc/ZYy40zqX/0c60c04f6b385.jpg
'></img> </Paper>
          <Paper> <img src='https://i.postimg.cc/MK2xQ3MH/8dffaf3717ddd.png
'></img> </Paper>
        </Carousel>
        <div style={{ backgroundColor: '#e67e22', color: 'white', padding: '20px' }}>
          <h2>Home - Tablet View</h2>
          <p>This is the content for medium-sized screens.</p>
        </div>
        </div>
      )}
      {isDesktop && (
        <div>
        <Carousel>
        <Paper> <img src='https://i.postimg.cc/ZYy40zqX/0c60c04f6b385.jpg
'></img> </Paper>
          <Paper> <img src='https://i.postimg.cc/MK2xQ3MH/8dffaf3717ddd.png
'></img> </Paper>
        </Carousel>
        <div style={{ backgroundColor: '#3498db', color: 'white', padding: '30px' }}>
          <h2>Home - Desktop View</h2>
          <p>This is the content for larger screens.</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default Home;
