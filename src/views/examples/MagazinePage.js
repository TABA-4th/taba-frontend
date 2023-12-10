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
                <h2 className="title">니모내모 매거진</h2>
                <h4>
                  니모내모 매거진에서는 두피와 관련된 유용한 정보들을 알려드립니다! 
                  두피와 관련된 기사들이 아래에 있으니 원하시는 정보를 찾아보세요!
                </h4>
              </Col>
            </Row>
            <div className="separator separator-primary">            
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h4 className="title">약국에서 쉽게 살 수 있는 지루성 두피염 약</h4>
                  <h4 >
                    안녕하세요 니모내모입니다!<br/><br/>

                    피부과 방문 원인 1위를 차지할 정도로 많은 사람이 겪는 질환, 지루성 두피염! <br/><br/>

                    이번에는 <strong >약국에서 쉽게 살 수 있는 지루성 두피염 약</strong>에 대해 이야기해볼까 합니다.<br/><br/>
                  </h4>
                </Col>
              </Row>
            </div>
              <Row className="justify-content-md-center">
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/SKwTQcvr/pexels-mikhail-nilov-6964103.jpg" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto",  }}
                  />
                  <h4>
                    <br/><br/>
                    지루성 두피염 약의 종류는 기능과 형태에 따라 다양합니다. <br/><br/>

                    보통 피부과에 방문하게 되면 약 처방을 받는데,<br/><br/>

                    이때 처방받는 약에는 균 증식을 억제하기 위한 <strong>항생제, 항진균제</strong>가 있으며<br/><br/>

                    즉각적인 증상을 해결하기 위한(특히 가려움을 완화하기 위한) <strong>항히스타민제, 스테로이드</strong>가 있습니다.<br/><br/>

                    이 약들은 증상이 심할 경우 반드시 처방받아먹어야 하며,<br/><br/>

                    처방을 받기 위해서는 병원에 꼭 방문해야 합니다.<br/><br/>

                    하지만 이 단계 전에 한 가지 쉽게 접할 수 있는 약이 있습니다.<br/><br/>
                  </h4>
                </Col>
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/8zdPmbhF/pexels-jeshootscom-576831.jpg" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                  />
                  <h4>
                    <br/><br/>
                    바로 <strong>'일반의약품'</strong>에 해당하는 약인데요,<br/><br/>

                    이의 경우 의사의 처방전 없이 약국에서 쉽게 구매가 가능합니다.<br/><br/>
                  </h4>
                </Col>
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/5yMfzY65/pexels-sora-shimazaki-5938352.jpg" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                  />
                  <h4 >
                    <br/><br/>
                    일반적으로 '일반의약품'에 해당하는 지루성 두피염 약은 샴푸의 형태로 나옵니다.<br/><br/>

                    잉? 약 달라고 했더니 왜 샴푸를 주는 거야?<br/><br/>

                    라고 생각하실 수 있는데, 이는 <strong>'일반의약품'</strong>이란 타이틀을 받은 약이니 안심하셔도됩니다!<br/><br/>
                  </h4>
                </Col>
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/7ZPjnfbM/medical-5459633-1280.png" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                  />
                  <h4 >
                    <br/><br/>
                    보통 약국에서 쉽게 구매할 수 있는 지루성 두피염 약은 '항진균제'에 해당합니다.<br/><br/>

                    이는 말라세지아 효모균 증식을 억제하기 위한 제품인데요,<br/><br/>

                    주로 끝이 '록스'로 끝나곤 합니다.<br/><br/>

                  </h4>
                </Col>
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/6qL1dXXm/thermometer-1539191-1280.jpg" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                  />
                  <h4 >
                    <br/><br/>
                    그리고 그중 케토코나졸 2%가 가장 많이 사용됩니다.<br/><br/>

                    물론 이는 약사의 의견에 따라 권유되며,<br/><br/>

                    사용자가 원하는 사용감, 성능 등에 따라 의약품을 선택할 수 있으니<br/><br/>

                    몇 번 사용해 보신 이력이 있거나 주변의 추천이 있었다면<br/><br/>

                    해당 의약품을 사용해 보시는 것을 권장합니다.<br/><br/>
                  </h4>
                </Col>
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/RhzD60jt/cream-4713579-1280.jpg" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                  />
                  <h4 >
                    <br/><br/>
                    약용 샴푸는 특정 효과를 위해 상품화된 제품이라서<br/><br/>

                    일반 샴푸처럼 쓰면 그 효과가 매우 떨어집니다.<br/><br/>

                    일단, 약용 샴푸는 <strong>일주일에 1~2회 사용을 권장</strong>합니다.<br/><br/>

                    매일 사용한다고 해서 큰 효과를 얻지도 못할뿐더러<br/><br/>

                    두피에 큰 자극이 될 수 있기 때문입니다.<br/><br/>
                    <img 
                    src="https://i.postimg.cc/W3Zy1Zfj/woman-3288365-1280.jpg" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                    />
                    <br/><br/>
                    일반적인 사용법은<br/><br/>

                    <strong>약을 짜서 거품을 잘 낸 후에 두피에 골고루 마사지하듯 바른 후</strong><br/><br/>

                    <strong>3~5분 방치한 후 헹궈주어야 합니다.</strong><br/><br/>

                    여기서 약 효과를 극대화하겠다고 5분 이상을 방치하면 오히려 나빠질 수 있으니<br/><br/>

                    권장 사용 방법을 잘 지키며 사용하는 게 중요하다고 할 수 있습니다.<br/><br/>
                  </h4>
                </Col>
                <Col className="text-center" lg="8" md="12">
                  <img 
                    src="https://i.postimg.cc/3rg6MgvF/medical-5459631-1280.png" 
                    alt="Mountains" 
                    style={{ width: "70%", height: "auto" }}
                  />
                  <h4 >
                    <br/><br/>
                    지루성 두피염이란 병 자체가 일생생활에 빈번히 이루어지는 나쁜 습관에 의해 시작되는 경우가 많아<br/><br/>

                    약만으론 절대 해결할 수 없습니다.<br/><br/>

                    재발 없는 지루성 두피염 치료는 홈 케어가 반드시 필요합니다.<br/><br/>

                    선택이 아닌 '필수'란 겁니다!<br/><br/>

                    그러니 지난번에 알려드린 홈 케어 방법을 반드시 병행하며 치료하시기 바랍니다.<br/><br/>

                    완벽한 두피 관리를 위해 니모내모가 앞장서겠습니다 +_+ <br/><br/><br/><br/>

                    <a href="https://www.youtube.com/watch?v=YXzrUE1qUwc">
                      출처
                    </a>
                  </h4>
                </Col>
              </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">더 많은 정보를 원하시나요?</h2>
              <h5 >
                더 많은 기사는 아래에서 확인 할 수 있습니다! <br/><br/>
                다양한 모발 기사들이 매거진에 있으니 확인하고 가세요! <br/><br/>
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>

            <hr/><hr/><hr/><hr/>
            {isMobile ? <> <Row>
              <Col md={{ size: 6, offset: 3 }} xs="12">
                <Card className="mb-3">
                  <a href="https://m.health.chosun.com/svc/news_view.html?contid=2023091801650">
                    <img src="https://i.postimg.cc/05ttbgFj/pexels-tim-gouw-52608.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
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
                  <a href="https://www.pharmnews.com/news/articleView.html?idxno=220705"><img src="https://i.postimg.cc/ryBr4rn3/hair-6361059-1921.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
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
                  <a href="http://chakom.org/bbs/board.php?bo_table=know&wr_id=64&sfl=mb_id%2C1&stx=mus456"><img src="https://i.postimg.cc/TP6vbQhW/mg9.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">두피 건강에 좋은 음식들</CardTitle>
                    <CardText>
                    두피 질환에 좋은 음식들은 무엇이 있을까요? <br/>
                    두피 질환 개선에 도움을 주는 음식들을 살펴봅시다!
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
                <a href="https://doctornow.co.kr/content/magazine/9f33fb53d4de438cad1ddc40c8792f07"><img src="https://i.postimg.cc/qR1P9Tw8/mg6.jpg" alt="Mountains" style={{ width: "100%", height: "auto" }}/></a>
                  <CardBody>
                    <CardTitle tag="h4">머리를 잘 감는데도 비듬이 생기는 이유?</CardTitle>
                    <CardText>
                    비듬이 생기는 원인에는 무엇이 있을까요? <br/>
                    비듬 예방 치료법과 일상 속 비듬 최소화 방법을 알아봐요!
                    </CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row></> : <> <Card className="mb-3" style={style}>
            <a href="https://m.health.chosun.com/svc/news_view.html?contid=2023091801650"><img src="https://i.postimg.cc/05ttbgFj/pexels-tim-gouw-52608.jpg" alt="Mountains" width="600" height="400"/></a>
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
            <a href="https://www.pharmnews.com/news/articleView.html?idxno=220705"><img src="https://i.postimg.cc/ryBr4rn3/hair-6361059-1921.jpg" alt="Mountains" width="600" height="400"/></a>
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
            <a href="http://chakom.org/bbs/board.php?bo_table=know&wr_id=64&sfl=mb_id%2C1&stx=mus456"><img src="https://i.postimg.cc/TP6vbQhW/mg9.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4">두피 건강에 좋은 음식들</CardTitle>
                <CardText>
                두피 질환에 좋은 음식들은 무엇이 있을까요? <br/>
                    두피 질환 개선에 도움을 주는 음식들을 살펴봅시다!
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
            <a href="https://doctornow.co.kr/content/magazine/9f33fb53d4de438cad1ddc40c8792f07"><img src="https://i.postimg.cc/qR1P9Tw8/mg6.jpg" alt="Mountains" width="600" height="400"/></a>
              <CardBody>
                <CardTitle tag="h4"> 머리를 잘 감는데도 비듬이 생기는 이유?</CardTitle>
                <CardText>
                비듬이 생기는 원인에는 무엇이 있을까요? <br/>
                비듬 예방 치료법과 일상 속 비듬 최소화 방법을 알아봐요!
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
