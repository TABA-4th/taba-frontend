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

  return (
    <>
      <div className="section" style={{backgroundColor:'#d6bbff'}}>
        <Container>
        <h2 className="title" style={{color:'white'}}>니모내모 검사는 어떻게 진행되나요?</h2>
        <br/><br/><br/>
        {isMobile ? <>
          <Row>

              <p className="category" style={{color:'white',fontSize:'20px'}}>나이 연령대를 먼저 입력해 주세요</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/HsPq1vG7/image-23.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                </CardHeader>
                <CardBody>
                    <TabPane >
                      <p>
                      설문조사를 통해 나이와 연령대를 반영해서 모발 건강 상태가 상위 몇 % 인지 알 수 있게 해드립니다
                      </p>
                    </TabPane>
                </CardBody>
              </Card>


              <p className="category" style={{color:'white',fontSize:'20px'}}>두피 사진을 업로드 해 주세요!</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/T3LZdjGN/image-24.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                </CardHeader>
                <CardBody>
                  
                    <TabPane >
                      <p>
                      두피 사진을 업로드 해 주시면 니모내모 AI 서버에서 두피 성분 6가지를 분석하고, <br/>
                      설문조사 내용을 바탕으로 두피 건강 상태가 상위 몇 % 인지 표시됩니다
                      </p>
                    </TabPane>
                </CardBody>
              </Card>
             



              <p className="category" style={{color:'white',fontSize:'20px'}}>나에게 맞는 제품들을 추천해드립니다</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/Wb4BKLyv/image-25.png" alt="Mountains" style={{ width: "100%", height: "auto" }}/>
                </CardHeader>
                <CardBody>
                  
                    <TabPane >
                      <p>
                      검진 결과 중 가장 높은 값 2개를 기반으로 해서<br/>
                      나에게 가장 잘 맞는 제품들을 추천해드립니다!
                      </p>
                    </TabPane>
                </CardBody>
              </Card>
          </Row>
          </> : 
          
          <><Row>   
            <Col className="ml-auto mr-auto">
            <p className="category" style={{color:'white',fontSize:'20px'}}>나이 연령대를 먼저 입력해 주세요</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/HsPq1vG7/image-23.png" alt="Mountains" width="600" height="400"/>
                </CardHeader>
                <CardBody>
                    <TabPane >
                    <p>
                      설문조사를 통해 나이와 연령대를 반영해서 모발 건강 상태가 상위 몇 % 인지 알 수 있게 해드립니다
                    </p>
                    </TabPane>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto">
            <p className="category" style={{color:'white',fontSize:'20px'}}>두피 사진을 업로드 해 주세요!</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/T3LZdjGN/image-24.png" alt="Mountains" width="600" height="400"/>
                </CardHeader>
                <CardBody>
                    <TabPane>
                    <p>
                      두피 사진을 업로드 해 주시면 니모내모 AI 서버에서 두피 성분 6가지를 분석하고, <br/>
                      설문조사 내용을 바탕으로 두피 건강 상태가 상위 몇 % 인지 표시됩니다
                      </p>
                    </TabPane>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" >
            <p className="category" style={{color:'white',fontSize:'20px'}}>나에게 맞는 제품들을 추천해드립니다</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/Wb4BKLyv/image-25.png" alt="Mountains" width="600" height="400"/>
                </CardHeader>
                <CardBody>
                    <TabPane>
                    <p>
                      검진 결과 상위 값 2개 기반으로<br/>
                      개인 맞춤 제품들을 추천해드립니다!
                      </p>
                    </TabPane>
                </CardBody>
              </Card>
            </Col>



            
          </Row></> }
        </Container>
      </div>
    </>
  );
}

export default Introduction;
