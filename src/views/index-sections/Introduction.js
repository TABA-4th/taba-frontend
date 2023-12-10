import React, { useEffect,useState } from "react";

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

function Introduction() {
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

    const imgBox = {
      boxShadow: "0 5px 80px 3px #C4DCDE",
      borderRadius: "100px",
      width: "100%",
      height: "1300px",
      paddingLeft: "20%",
      paddingRight: "20%",
      paddingBottom: "30px",
      paddingTop: "10%",
      backgroundColor: "white",
    }

  return (
    <>
      {isMobile?
        <>
          <div className="section" style={{backgroundColor:'#ECFFFF'}}>
              <Container>
                <Row className="justify-content-md-center">
                  <Col lg="70" md="55">
                    <div
                      style={{
                        fontSize:"15px", 
                        textAlign: "center",
                        color: "#71D0D7",
                      }}>
                      FAQ
                    </div>
                    <div 
                      style={{
                        fontSize:"20px", 
                        fontWeight: "550", 
                        color:'black',
                        textAlign: "center",
                      }}
                    >
                      니모내모 검사는 어떻게 진행되나요?
                    </div>
                    <br/><br/>
                  </Col>
                </Row>
                <Row>
                  <p className="category" style={{color:'#728081',fontSize:'12px', textAlign: "center"}}>
                    정확한 두피 상태 확인을 위한 설문조사를 진행해주세요.
                  </p>
                    <Card 
                      style={{
                        borderRadius: "50px", 
                        paddingTop: "10%", 
                        paddingLeft: "10%", 
                        paddingRight: "10%", 
                        paddingBottom: "5%",
                        
                      }}
                    >
                      <CardHeader style={{textAlign:'center'}}>
                        <img 
                          src="https://i.postimg.cc/WzkMfr4D/free-animated-icon-customer-7211817.png" 
                          alt="Mountains" 
                          style={{ 
                            width: "100px", 
                            height: "auto", 
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                          <TabPane >
                            <p style={{fontSize:"10px", fontWeight: "600"}}>
                            설문조사를 통해 나이와 연령대를 반영해서 모발 건강 상태가 상위 몇 % 인지 알 수 있게 해드립니다
                            </p>
                          </TabPane>
                      </CardBody>
                    </Card>


                    <p className="category" style={{color:'#728081',fontSize:'12px', textAlign: "center"}}>
                      두피 사진을 업로드 해 주세요!
                    </p>
                    <Card 
                      style={{
                        borderRadius: "50px", 
                        paddingTop: "10%", 
                        paddingLeft: "10%", 
                        paddingRight: "10%", 
                        paddingBottom: "5%",
                      }}
                    >
                      <CardHeader style={{textAlign: 'center'}}>
                      <img 
                        src="https://i.postimg.cc/rmbpRrgp/free-animated-icon-line-chart-7211797.png" 
                        alt="Mountains" 
                        style={{ 
                          width: "100px", 
                          height: "auto", 
                        }}
                      />
                      </CardHeader>
                      <CardBody>
                          <TabPane >
                            <p style={{fontSize:"10px", fontWeight: "600"}}>
                              두피 사진을 업로드 해 주시면 니모내모 AI 서버에서 두피 성분 6가지를 분석하고,
                              설문조사 내용을 바탕으로 두피 건강 상태가 상위 몇 % 인지 표시됩니다
                            </p>
                          </TabPane>
                      </CardBody>
                    </Card>
                    <p className="category" style={{color:'#728081',fontSize:'12px', textAlign: "center"}}>
                      나에게 맞는 제품들을 추천해드립니다!
                    </p>
                    <Card style={{borderRadius: "50px", paddingTop: "10%", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%"}}>
                      <CardHeader style={{textAlign: 'center'}}>
                      <img 
                        src="https://i.postimg.cc/d3sY5R66/free-animated-icon-like-6172539.png" 
                        alt="Mountains" 
                        style={{ 
                          width: "100px", 
                          height: "auto", 
                        }}
                      />
                      </CardHeader>
                      <CardBody>
                          <TabPane >
                            <p style={{fontSize:"10px", fontWeight: "600"}}>
                              검진 결과 중 가장 높은 값 2개를 기반으로 해서
                              나에게 가장 잘 맞는 제품들을 추천해드립니다!
                            </p>
                          </TabPane>
                      </CardBody>
                    </Card>
                </Row>
                
            </Container>
          </div>
        </>
        :
        <>
          <div className="section" style={{backgroundColor:'#ECFFFF'}}>
              <Container>
                <Row className="justify-content-md-center">
                  <Col lg="70" md="55">
                    <br /><br />
                    <div
                      style={{
                        fontSize:"40px", 
                        textAlign: "center",
                        color: "#71D0D7",
                      }}>
                      FAQ
                    </div>
                    <br />
                    <div 
                      style={{
                        fontSize:"55px", 
                        fontWeight: "550", 
                        color:'black',
                        textAlign: "center",
                      }}
                    >
                      니모내모 검사는 어떻게 진행되나요?
                    </div>
                    <br/><br/><br/>
                  </Col>
                </Row>
                <Row>
                  <p className="category" style={{color:'#728081',fontSize:'25px', textAlign: "center"}}>
                    정확한 두피 상태 확인을 위한 설문조사를 진행해주세요.
                  </p>
                  <Card style={{borderRadius: "50px", paddingTop: "10%", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%"}}>
                    <CardHeader style={{textAlign: 'center'}}>
                      <img 
                        src="https://i.postimg.cc/WzkMfr4D/free-animated-icon-customer-7211817.png" 
                        alt="Mountains" 
                        style={{ 
                          width: "600px", 
                          height: "auto", 
                          paddingLeft: "100px",
                          paddingRight: "100px",
                          paddingTop: "20px" 
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <TabPane >
                        <p style={{fontSize:"25px", fontWeight: "600"}}>
                          설문조사를 통해 나이와 연령대를 반영해서 모발 건강 상태가 상위 몇 % 인지 알 수 있게 해드립니다
                        </p>
                      </TabPane>
                    </CardBody>
                  </Card>
                  <p className="category" style={{color:'#728081',fontSize:'25px', textAlign: "center"}}>
                    두피 사진을 업로드 해 주세요!
                  </p>
                  <Card style={{borderRadius: "50px", paddingTop: "10%", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%"}}>
                    <CardHeader style={{textAlign: 'center'}}>
                      <img 
                        src="https://i.postimg.cc/rmbpRrgp/free-animated-icon-line-chart-7211797.png" 
                        alt="Mountains" 
                        style={{ 
                          width: "600px", 
                          height: "auto", 
                          paddingLeft: "100px",
                          paddingRight: "100px",
                          paddingTop: "20px" 
                          }}
                      />
                    </CardHeader>
                    <CardBody>
                      <TabPane >
                        <p style={{fontSize:"25px", fontWeight: "600"}}>
                          두피 사진을 업로드 해 주시면 니모내모 AI 서버에서 두피 성분 6가지를 분석하고,
                          설문조사 내용을 바탕으로 두피 건강 상태가 상위 몇 % 인지 표시됩니다
                        </p>
                      </TabPane>
                    </CardBody>
                  </Card>
                  <p className="category" style={{color:'#728081',fontSize:'25px', textAlign: "center"}}>
                    나에게 맞는 제품들을 추천해드립니다!
                  </p>
                  <Card style={{borderRadius: "50px", paddingTop: "10%", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%"}}>
                    <CardHeader style={{textAlign: 'center'}}>
                      <img 
                        src="https://i.postimg.cc/d3sY5R66/free-animated-icon-like-6172539.png" 
                        alt="Mountains" 
                        style={{ 
                          width: "600px", 
                          height: "auto",                             
                          paddingLeft: "100px",
                          paddingRight: "100px",
                          paddingTop: "20px" 
                          }}
                      />
                    </CardHeader>
                    <CardBody>
                      <TabPane >
                        <p style={{fontSize:"25px", fontWeight: "600"}}>
                          검진 결과 중 가장 높은 값 2개를 기반으로 해서
                          나에게 가장 잘 맞는 제품들을 추천해드립니다!
                        </p>
                      </TabPane>
                    </CardBody>
                  </Card>        
                </Row>
              </Container>
          </div>
        </>
      }
    </>
  );
}

export default Introduction;
