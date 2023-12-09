import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {

  const imgBox = {
    boxShadow: "0 5px 80px 3px #E1E1E1",
    borderRadius: "100px",
    width: "100%",
    height: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    paddingTop: "10px",
  }

  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="25" md="12">
              <br /><br /><br /><br />
              <div style={imgBox}>
                <br /><br /><br /><br /><br /><br />
                <div 
                  style={{fontSize:"30px", color:"#71D0D7"}}
                >
                  개인의 두피 상태 체크 및 개인화된 상품 추천
                </div>
                <br />
                <div style={{fontSize:"60px", fontWeight:"700"}}>
                  니모내모의 가치 
                </div>
                <br /><br />
                <h3 className="description">
                  우리는 병이 나면 병원에 갑니다. <br/><br/>

                  평소에는 컨디션을 관리하기 위해 평소에 꾸준히 ‘영양제’를 챙겨 먹습니다. <br/><br/>

                  또, 피부를 관리하기 위해서는 좋다는 크림을 열심히 찾아 바르죠. <br/><br/>

                  하지만 그만큼 중요한 두피 관리는요?  <br/><br/>
                  샴푸, 린스 말고 어떻게 관리하고 계신가요? <br/><br/>

                  우리는 두피 관리를 자기관리의 영역으로 끌어들여 <br/><br/>

                  디지털 헬스케어 분야의 영역을 넓혀 <br/><br/>

                  자기관리 분야의 새로운 지평을 열 것입니다. <br/><br/><br /><br />
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
        <br/><br/><br /><br />
      </div>
    </>
  );
}

export default CompleteExamples;
