import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Paper, Button,Container } from '@mui/material'
import styles from './Home.module.css';
import MainSlider from '../components/MainSlider'
import SubSlider from '../components/SubSlider';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1423 });
  const isDesktop = useMediaQuery({ minWidth: 1424 });

  return (
    
    <div >
      
      {isMobile && (
      <div>
        <div style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>
          <h2>Home - Mobile View</h2>
          <p>This is the content for smaller screens.</p>
        </div>
        <MainSlider></MainSlider>
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
        </div>
      </Container>

      <SubSlider></SubSlider>
      <div>
          <Button variant="contained" href="/survey" style={{ display:'block' }}>지금 시작하기</Button>
      </div>

        </div>
      )}
      {isTablet && (
        <div>
        <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
          <h2>Home - Tablet View</h2>
          <p>This is the content for medium-sized screens.</p>
        </div>
        <MainSlider></MainSlider>
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
        </div>
      </Container>

      <SubSlider></SubSlider>
      <div>
          <Button variant="contained" href="/survey" style={{ display:'block',width:'80%' }}>지금 시작하기</Button>
      </div>
        </div>
      )}
      {isDesktop && (
        <div>

        <div style={{ backgroundColor: 'white', color: 'black', padding: '30px' }}>
          <h2>Home - Desktop View</h2>
          <p>This is the content for larger screens.</p>
        </div>
        <MainSlider></MainSlider>
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
        </div>
      </Container>

      <SubSlider></SubSlider>
      <div>
          <Button variant="contained" href="/survey" style={{ display:'block',width:'80%' }}>지금 시작하기</Button>
      </div>
        </div>
      )}
    </div>
  );
}

export default Home;
