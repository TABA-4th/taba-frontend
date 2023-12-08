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

  },
  {
    src: require("assets/img/M2 (2).png"),

  },
  {
    src: require("assets/img/M2 (3).png"),

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
      <div className="section" id="carousel" style={{background: "#F7F7F7"}}>
        <br /><br /><br /><br />
        <Container>
          <div className="title">
            <div 
              style={{
                textAlign:"center",
                fontSize: "60px",
              }}
            >
              지금 바로 니모내모를 시작해보세요!
            </div>
          </div>
          <br /><br /><br /><br /><br />
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
              <Button 
                style={{ backgroundColor: '#9ce8ee', color: 'white', fontSize:'34px',fontWeight:'bold', height: "100px", paddingTop: "30px" }} 
                href="/survey"
                block
                className="btn-round"                  
                size="lg"
              >
                지금 바로 시작해보세요!
              </Button>
            </Col>
          </Row>
          <br /><br /><br /><br /><br />
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
