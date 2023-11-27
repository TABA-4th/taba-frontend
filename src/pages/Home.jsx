import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Container } from "@mui/material";
import styles from "./Home.module.css";
import MainSlider from "../components/MainSlider";
import SubSlider from "../components/SubSlider";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1423 });
  const isDesktop = useMediaQuery({ minWidth: 1424 });
  const images = [
    "https://i.postimg.cc/KcKgqkbS/1.jpg",
    "https://i.postimg.cc/T3xL3tDf/2.jpg",
    "https://i.postimg.cc/wjktyDXJ/3.jpg",
    "https://i.postimg.cc/VNLJj5gh/4.jpg",
  ];

  return (
    <div>
      {isMobile && (
        <div>
          <div
            style={{
              backgroundImage: "https://postimg.cc/YjYWyVLy",
              color: "black",
              padding: "70px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>
              대한민국 1등 진단 앱 니모내모
            </h2>
            <p>두피 진단과 건강 솔루션을 찾아보세요</p>
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
                니모내모는 AI를 활용한 두피 진단을 제공하고, 사용자에게 맞는
                탈모 방지 제품을 추천드립니다.
                <br />
                지금 함께 시작해보실래요?
              </p>
            </div>
          </Container>

          <SubSlider></SubSlider>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <AwesomeButton type="secondary" href="/survey">
              {" "}
              지금 시작하기{" "}
            </AwesomeButton>
          </div>
        </div>
      )}
      {isTablet && (
        <div>
          <div
            style={{
              backgroundImage: "https://postimg.cc/YjYWyVLy",
              color: "black",
              padding: "150px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>
              대한민국 1등 진단 앱 니모내모
            </h2>
            <p>두피 진단과 건강 솔루션을 찾아보세요</p>
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
                니모내모는 AI를 활용한 두피 진단을 제공하고, 사용자에게 맞는
                탈모 방지 제품을 추천드립니다.
                <br />
                지금 함께 시작해보실래요?
              </p>
            </div>
          </Container>

          <SubSlider></SubSlider>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <AwesomeButton type="secondary" href="/survey">
              {" "}
              지금 시작하기{" "}
            </AwesomeButton>
          </div>
        </div>
      )}
      {isDesktop && (
        <div>
          <div
            style={{
              backgroundImage: `url('https://i.postimg.cc/jS0hHVDf/Kakao-Talk-20231124-165154753.jpg')`,
              color: "black",
              padding: "250px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>
              대한민국 1등 진단 앱 니모내모
            </h2>
            <p>두피 진단과 건강 솔루션을 찾아보세요</p>
            <br />
            <br />
            <Button variant="outlined" href="/about">
              {" "}
              더 알아보기{" "}
            </Button>{" "}
            <Button variant="outlined" href="/survey">
              바로 진단 시작!
            </Button>
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
                니모내모는 AI를 활용한 두피 진단을 제공하고, 사용자에게 맞는
                탈모 방지 제품을 추천드립니다.
                <br />
                지금 함께 시작해보실래요?
              </p>
              <Row xs={1} md={2} className="g-4">
                {images.map((imgSrc, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={imgSrc} />{" "}
                      {/* 이 부분을 수정하세요 */}
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>

          <SubSlider></SubSlider>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <AwesomeButton type="secondary" href="/survey">
              {" "}
              지금 시작하기{" "}
            </AwesomeButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
