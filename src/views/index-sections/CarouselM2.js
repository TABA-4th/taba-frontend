import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/M2 (1).png"),
    altText: "나에게 꼭 맞는 샴푸 추천!",
    caption: "나에게 꼭 맞는 샴푸 추천!"
  },
  {
    src: require("assets/img/M2 (2).png"),
    altText: "두피 케어 린스 추천!",
    caption: "두피 케어 린스 추천!"
  },
  {
    src: require("assets/img/M2 (3).png"),
    altText: "자세한 진단을 위해 디바이스를 추천해 드려요!",
    caption: "자세한 진단을 위해 디바이스를 추천해 드려요!"
  }
];

function CarouselSection() {
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
          <div className="title">
          <h3 style={{textAlign:"center"}}>지금 바로 니모내모를 시작해보세요!</h3>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
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
              <br/><br/><br/>
              <Button href="/file-upload"
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                    >
                      지금 시작하러 가기
                    </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
