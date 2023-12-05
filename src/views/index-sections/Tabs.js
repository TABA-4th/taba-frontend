import React from "react";

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
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
        <h2 className="title">Nimonaemo Magazine</h2>
        <br/><br/><br/>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">3개월에 한 번 맞는 탈모 치료 주사</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/kXy9fkLc/mg8.png" alt="Mountains" width="600" height="400"/>
                </CardHeader>
                <CardBody>
                    <TabPane tabId="iconPills1">
                      <p>
                      원형탈모를 일으키는 원인을 찾았다. 가상기억 T세포에서 유래한 
                      면역세포군이 원인으로, 새로운 치료 전략도 제시했다.
                      </p>
                    </TabPane>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">국내 연구진, 원형탈모 원인 찾았다</p>
              <Card>
                <CardHeader>
                <img src="https://i.postimg.cc/4dtRtMzp/mg7.jpg" alt="Mountains" width="600" height="400"/>
                </CardHeader>
                <CardBody>
                  
                    <TabPane tabId="pills1">
                      <p>
                      전 세계인의 공통 관심, ‘탈모’ 정말 정복할 수 없을까?
                      ‘탈모’ 정복에 나섰다! ‘원형 탈모’ 치료제 등 신제품 등장, 글로벌 탈모 치료제 동향
                      </p>
                    </TabPane>
                </CardBody>
              </Card>
             

            </Col>

            <Col className="ml-auto mr-auto" md="10" xl="8">
            <a href="/magazine" className="justify-content-center"><Button style={{ backgroundColor: '#9ce8ee', color: 'white',width:'100%',fontSize:'24px',fontWeight:'bold' }} href="/magazine"
                      block
                      className="btn-round"
                      size="lg"
                    >두피 기사 확인</Button></a></Col>


            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
