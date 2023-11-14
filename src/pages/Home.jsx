import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button,Container } from '@mui/material'
import styles from './Home.module.css';


const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    

    <div >
      {isMobile && (
      <div>
        <div style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px' }}>
          <h2>Home - Mobile View</h2>
          <p>This is the content for smaller screens.</p>
        </div>
        <Carousel className="imgList">
        <Paper> <img src='https://i.postimg.cc/ZYy40zqX/0c60c04f6b385.jpg'></img> </Paper>
          <Paper> <img src='https://i.postimg.cc/MK2xQ3MH/8dffaf3717ddd.png'></img> </Paper>
        </Carousel>

        <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
          꾸준한 두피 관리, 섬세한 진단을 원하신다면?
            <br />
            <strong> 니모내모를 이용해 보세요! </strong>
          </h1>
          <p className={styles.description}>
            니모내모는 AI를 활용한 두피 진단을 제공하고, 사용자에게 맞는 탈모 방지 제품을 추천드립니다.
            <br />
            지금 함께 시작해보실래요?
          </p>
          <div>
            <Button variant="contained">지금 시작하기</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src='https://i.postimg.cc/Rh4mRbR1/84de2705-ad75-49d0-b8fa-366deaf1b37f.webp' alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
      </Container>
        </div>
      )}
      {isTablet && (
        <div>
        <div style={{ backgroundColor: '#e67e22', color: 'white', padding: '20px' }}>
          <h2>Home - Tablet View</h2>
          <p>This is the content for medium-sized screens.</p>
        </div>
        <Carousel className="imgList">
        <Paper> <img src='https://i.postimg.cc/ZYy40zqX/0c60c04f6b385.jpg'></img> </Paper>
          <Paper> <img src='https://i.postimg.cc/MK2xQ3MH/8dffaf3717ddd.png'></img> </Paper>
        </Carousel>

        <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
          꾸준한 두피 관리, 섬세한 진단을 원하신다면?
            <br />
            <strong> 니모내모를 이용해 보세요! </strong>
          </h1>
          <p className={styles.description}>
            니모내모는 AI를 활용한 두피 진단을 제공하고, 사용자에게 맞는 탈모 방지 제품을 추천드립니다.
            <br />
            지금 함께 시작해보실래요?
          </p>
          <div>
            <Button variant="contained">지금 시작하기</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src='https://i.postimg.cc/Rh4mRbR1/84de2705-ad75-49d0-b8fa-366deaf1b37f.webp' alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
      </Container>
        </div>
      )}
      {isDesktop && (
        <div>

        <div style={{ backgroundColor: '#3498db', color: 'white', padding: '30px' }}>
          <h2>Home - Desktop View</h2>
          <p>This is the content for larger screens.</p>
        </div>
        <Carousel className="imgList">
        <Paper> <img src='https://i.postimg.cc/ZYy40zqX/0c60c04f6b385.jpg'></img> </Paper>
          <Paper> <img src='https://i.postimg.cc/MK2xQ3MH/8dffaf3717ddd.png'></img> </Paper>
        </Carousel>

        <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            꾸준한 두피 관리, 섬세한 진단을 원하신다면?
            <br />
            <strong> 니모내모를 이용해 보세요! </strong>
          </h1>
          <p className={styles.description}>
            니모내모는 AI를 활용한 두피 진단을 제공하고, 사용자에게 맞는 탈모 방지 제품을 추천드립니다.
            <br />
            지금 함께 시작해보실래요?
          </p>
          <div>
            <Button variant="contained">지금 시작하기</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src='https://i.postimg.cc/Rh4mRbR1/84de2705-ad75-49d0-b8fa-366deaf1b37f.webp' />
        </div>
      </Container>

        </div>
      )}
    </div>
  );
}

export default Home;
