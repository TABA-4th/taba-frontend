import React,{ useState }from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import MagazinePageHeader from 'components/Headers/MagazinePageHeader';
import DefaultFooter from "components/Footers/DefaultFooter.js";

function MagazinePage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const baseStyle = {
    padding: "0 6px",
    float: "auto",
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Conditional style based on the screen width
  const style = { ...baseStyle, width: "49.9%" };
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    // 화면 크기 변경 감지 함수
    const handleResize = () => {setIsMobile(window.innerWidth <= 992);};
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <MagazinePageHeader/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Nimonaemo Magazine</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>

            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div>

            <hr/><hr/><hr/><hr/>
            {isMobile ? <> <Row>
              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                  <CardBody>
                    <CardTitle tag="h4">Card title</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row></> : <> <Card className="mb-3" style={style}>
            <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" width="600" height="400"/>
              <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>


            <Card className="mb-3" style={style}>
            <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" width="600" height="400"/>
              <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>

            <hr/><hr/>
            <Card className="mb-3" style={style}>
            <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" width="600" height="400"/>
              <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="mb-3" style={style}>
            <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" width="600" height="400"/>
              <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>

            <hr/><hr/>
            <Card className="mb-3" style={style}>
            <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" width="600" height="400"/>
              <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="mb-3" style={style}>
            <img src="https://i.postimg.cc/vH82QrKc/img13.png" alt="Mountains" width="600" height="400"/>
              <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
            <hr/><hr/></> }



            

          </Container>
        </div>

        
        <DefaultFooter />
      </div>
    </>
  );
}

export default MagazinePage;
