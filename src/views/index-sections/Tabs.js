import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components

function Tabs() {

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

  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div>
        <div
            style={{
              textAlign: "center",
              background: "#9ce8ee",
              height: "auto",                
              paddingTop: "130px",
              paddingBottom: "130px",
              paddingLeft: "5%",
              paddingRight: "5%"
            }} 
        >
          {isMobile?
            <>
              <div 
              style={{
                fontSize:"30px", 
                fontWeight: "550", 
                color:'#3F4E4D',
            }}>
              nimonemo magazine
            </div>
            <br />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              니모내모가 들려주는 두피 이야기
            </div>
            </>
            :
            <>
              <div 
              style={{
                fontSize:"70px", 
                fontWeight: "550", 
                color:'#3F4E4D',
            }}>
              nimonemo magazine
            </div>
            <br />
            <div
              style={{
                fontSize: "28px",
                fontWeight: "600",
              }}
            >
              니모내모가 들려주는 두피 이야기
            </div>
            </>
          }
        </div>
        
        <Container>
          
          <br/><br/><br/><br/><br/><br/>
            <Row>
              <Col className="ml-auto mr-auto" md="10" xl="6">
                <p 
                  className="category"
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    color: "black"
                  }}
                >
                  3개월에 한 번 맞는 탈모 치료 주사
                </p>
                <Card>
                  <CardHeader>
                  <img src="https://i.postimg.cc/J4gw9HQ1/pexels-rdne-stock-project-6923475.jpg" alt="Mountains" width="600" height="400"/>
                  </CardHeader>
                  <CardBody>
                      <TabPane tabId="iconPills1">
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "600"
                          }}
                        >
                        원형탈모를 일으키는 원인을 찾았다. 가상기억 T세포에서 유래한 
                        면역세포군이 원인으로, 새로운 치료 전략도 제시했다.
                        </p>
                      </TabPane>
                  </CardBody>
                </Card>
              </Col>
              
              <Col className="ml-auto mr-auto" md="10" xl="6">
                <p 
                  className="category"
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    color: "black"
                  }}
                >
                    국내 연구진, 원형탈모 원인 찾았다
                </p>
                <Card>
                  <CardHeader>
                  <img src="https://i.postimg.cc/c4WT6x4Q/pexels-energepiccom-313690.jpg" alt="Mountains" width="600" height="400"/>
                  </CardHeader>
                  <CardBody>
                    
                      <TabPane tabId="pills1">
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "600"
                          }}
                        >
                        전 세계인의 공통 관심, ‘탈모’ 정말 정복할 수 없을까?
                        ‘탈모’ 정복에 나섰다! ‘원형 탈모’ 치료제 등 신제품 등장, 글로벌 탈모 치료제 동향
                        </p>
                      </TabPane>
                  </CardBody>
                </Card>
              

              </Col>
              
              <Col className="ml-auto mr-auto" md="10" xl="8">
              <br /><br /><br />
                <a href="/magazine" className="justify-content-center">
                  <Button 
                    style={{ 
                      backgroundColor: '#9ce8ee', 
                      color: 'white', 
                      width:'100%', 
                      height: "100px", 
                      fontSize:'30px',
                      fontWeight:'bold',
                      paddingTop: "30px",
                    }} 
                    href="/magazine"
                    block
                    className="btn-round"
                    size="lg"
                  >
                    기사 보러가기
                  </Button>
                </a>
              </Col>           
            </Row>
        </Container>
        <br /><br /><br /><br /><br /><br />
      </div>
    </>
  );
}

export default Tabs;
