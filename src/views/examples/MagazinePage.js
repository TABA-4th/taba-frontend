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
                  니모내모 매거진에서는 두피와 관련된 유용한 정보들을 알려드립니다! <br/><br/>
                  두피와 관련된 기사들이 아래에 있으니 원하시는 정보를 찾아보세요!
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
                        "url(" + require("assets/img/mg3.png") + ")"
                    }}
                  >

                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/mg1.png") + ")"
                    }}
                  ></div>
                </Col>
                <br/><br/>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/mg2.png") + ")"
                    }}
                  ></div>
                  <br/><br/><br/><br/>
                  <h3>
                    지루성 두피염 약의 종류
                  </h3>
                  <p>
                  지루성 두피염 약의 종류는 기능과 형태에 따라 다양합니다.

                  보통 피부과에 방문하게 되면 약 처방을 받는데,

                  이때 처방받는 약에는 균 증식을 억제하기 위한 항생제, 항진균제가 있으며

                  즉각적인 증상을 해결하기 위한(특히 가려움을 완화하기 위한) 항히스타민제, 스테로이드가 있습니다.

                  이 약들은 증상이 심할 경우 반드시 처방받아먹어야 하며,

                  처방을 받기 위해서는 병원에 꼭 방문해야 합니다.

                  하지만 이 단계 전에 한 가지 쉽게 접할 수 있는 약이 있습니다
                  </p>
                  <p>
                  바로 '일반의약품'에 해당하는 약인데요,

                  이의 경우 의사의 처방전 없이 약국에서 쉽게 구매가 가능합니다.
                  </p>
                  <p>
                  일반적으로 '일반의약품'에 해당하는 지루성 두피염 약은 샴푸의 형태로 나옵니다.

                  잉? 약 달라고 했더니 왜 샴푸를 주는 거야?

                  라고 생각하실 수 있는데, 이는 '일반의약품'이란 타이틀을 받은 약이니 안심하셔도됩니다!
                  </p>
                </Col>
              </Row>
            </div>

            <hr/><hr/><hr/><hr/>
            {isMobile ? <> <Row>
              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <a href="https://m.health.chosun.com/svc/news_view.html?contid=2023091801650"><img src="https://i.postimg.cc/t4SbHFqn/mg4.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">탈모의 계절 가을? 모발 '꽉'잡는 탈모 관리법</CardTitle>
                    <CardText>
                    가을철 환절기가 다가오며
                    평소보다 많이 빠지는 머리카락 때문에
                    고민하는 사람들이 많은데요.
                    왜 가을만 되면 탈모가 유독 심해지는 걸까요?
                    가을철 탈모 원인과 예방·관리법에 대해 알아봅니다.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <a href="https://www.pharmnews.com/news/articleView.html?idxno=220705"><img src="https://i.postimg.cc/CxL0tcgV/mg5.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">염증 억제 항체 이용 차세대 ‘원형탈모’ 치료제</CardTitle>
                    <CardText>
                    '원형탈모' 치료제 국내 최초 허가 소식에 이어 , 
                    탈모 하나로만 파이프라인을 다수 보유하고 있는 에피바이오텍이 범부처 재생의료사업단 과제에 선정됐다. 

                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 2 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <a href="https://newsroom.daewoong.co.kr/archives/21352"><img src="https://i.postimg.cc/g01Pxd6Y/mg6.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">자가 체크부터 예방법까지 탈모의 모든 것</CardTitle>
                    <CardText>
                    탈모로 걱정하는 분들을 위해 탈모 자가 체크부터 유형과 치료제 등 탈모에 대한 모든 것을 함께 살펴보겠습니다
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                <a href="https://newsroom.daewoong.co.kr/archives/21620"><img src="https://i.postimg.cc/4dtRtMzp/mg7.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">3개월에 한 번 맞는 탈모 치료 주사</CardTitle>
                    <CardText>
                    전 세계인의 공통 관심, ‘탈모’ 정말 정복할 수 없을까?
                    ‘탈모’ 정복에 나섰다! ‘원형 탈모’ 치료제 등 신제품 등장, 글로벌 탈모 치료제 동향
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <a href="https://www.docdocdoc.co.kr/news/articleView.html?idxno=3007397"><img src="https://i.postimg.cc/kXy9fkLc/mg8.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">국내 연구진, 원형탈모 원인 찾았다</CardTitle>
                    <CardText>
                    원형탈모를 일으키는 원인을 찾았다. 가상기억 T세포에서 유래한 
                    면역세포군이 원인으로, 새로운 치료 전략도 제시했다.
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                <a href="https://kafah.or.kr/27/?q=YToyOntzOjQ6InBhZ2UiO2k6NDtzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=1169599&t=board"><img src="https://i.postimg.cc/JhsL7t06/mg9.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">탈모 방지에 좋은 음식 4</CardTitle>
                    <CardText>
                    탈모 방지에 좋은 음식은 뭐가 있을까? <br/>
                    탈모 예방을 도와주는 성분들을 찾아보자!
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row></> : <> <Card className="mb-3" style={style}>
            <a href="https://m.health.chosun.com/svc/news_view.html?contid=2023091801650"><img src="https://i.postimg.cc/t4SbHFqn/mg4.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4">탈모의 계절 가을? 모발 '꽉'잡는 탈모 관리법</CardTitle>
                <CardText>
                가을철 환절기가 다가오며
                    평소보다 많이 빠지는 머리카락 때문에
                    고민하는 사람들이 많은데요.
                    왜 가을만 되면 탈모가 유독 심해지는 걸까요?
                    가을철 탈모 원인과 예방·관리법에 대해 알아봅니다.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>


            <Card className="mb-3" style={style}>
            <a href="https://www.pharmnews.com/news/articleView.html?idxno=220705"><img src="https://i.postimg.cc/CxL0tcgV/mg5.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4">염증 억제 항체 이용 차세대 ‘원형탈모’ 치료제</CardTitle>
                <CardText>
                    '원형탈모' 치료제 국내 최초 허가 소식에 이어 , 
                    탈모 하나로만 파이프라인을 다수 보유하고 있는 에피바이오텍이 범부처 재생의료사업단 과제에 선정됐다. 
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>

            <hr/><hr/>
            <Card className="mb-3" style={style}>
            <a href="https://newsroom.daewoong.co.kr/archives/21352"><img src="https://i.postimg.cc/g01Pxd6Y/mg6.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4">자가 체크부터 예방법까지 탈모의 모든 것</CardTitle>
                <CardText>
                탈모로 걱정하는 분들을 위해 탈모 자가 체크부터 유형과 치료제 등 탈모에 대한 모든 것을 함께 살펴보겠습니다
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="mb-3" style={style}>
            <a href="https://newsroom.daewoong.co.kr/archives/21620"><img src="https://i.postimg.cc/4dtRtMzp/mg7.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4">3개월에 한 번 맞는 탈모 치료 주사</CardTitle>
                <CardText>
                전 세계인의 공통 관심, ‘탈모’ 정말 정복할 수 없을까?
                ‘탈모’ 정복에 나섰다! ‘원형 탈모’ 치료제 등 신제품 등장, 글로벌 탈모 치료제 동향
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>

            <hr/><hr/>
            <Card className="mb-3" style={style}>
            <a href="https://www.docdocdoc.co.kr/news/articleView.html?idxno=3007397"><img src="https://i.postimg.cc/kXy9fkLc/mg8.png" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4">국내 연구진, 원형탈모 원인 찾았다</CardTitle>
                <CardText>
                원형탈모를 일으키는 원인을 찾았다. 가상기억 T세포에서 유래한 
                면역세포군이 원인으로, 새로운 치료 전략도 제시했다.

                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
            <Card className="mb-3" style={style}>
            <a href="https://kafah.or.kr/27/?q=YToyOntzOjQ6InBhZ2UiO2k6NDtzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=1169599&t=board"><img src="https://i.postimg.cc/JhsL7t06/mg9.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4"> 탈모 방지에 좋은 음식 4</CardTitle>
                <CardText>
                탈모 방지에 좋은 음식은 뭐가 있을까? <br/>
                탈모 예방을 도와주는 성분들을 찾아보자!
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
