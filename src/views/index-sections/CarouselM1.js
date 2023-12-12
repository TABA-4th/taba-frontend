import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/M1 (1).png"),
    altText: " ",
    caption: " "
  },
  {
    src: require("assets/img/M1 (2).png"),
    altText: " ",
    caption: " "
  },
  {
    src: require("assets/img/M1 (3).png"),
    altText: " ",
    caption: " "
  }
];

function CarouselSection() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(()=> {
    // 화면 크기 변경 감지 함수
    const handleResize = () => {setIsMobile(window.innerWidth <= 992);};
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    return function cleanup() {
        window.removeEventListener('resize', handleResize);
      };
  },[]);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          {isMobile?
            <>
              <div className="title">
                <p
                style={{
                  color: "#71D0D7",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
                >
                  AI를 통한 두피 상태 체크, 나만의 두피 캘린더, 맞춤형 제품 추천 
                </p>
                <div 
                  style={{
                    color: 'black',
                    fontSize:'20px',
                    textAlign:'center',
                    fontWeight:'700'
                  }}>
                  니모내모의 핵심 기능
                </div>
              </div>
              <br />
            </>
            :
            <>
              <br /><br /><br />
              <div className="title">
                <p
                style={{
                  color: "#71D0D7",
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                >
                  AI를 통한 두피 상태 체크, 나만의 두피 캘린더, 맞춤형 제품 추천 
                </p>
                <div 
                  style={{
                    color: 'black',
                    fontSize:'50px',
                    textAlign:'center',
                    fontWeight:'700'
                  }}>
                  니모내모의 핵심 기능
                </div>
              </div>
              <br /><br /><br />
            </>
          }
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval={2000}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <br /><br /><br /><br /><br />
      </div>
    </>
  );
}

export default CarouselSection;
