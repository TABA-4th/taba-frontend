import React from 'react';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

const MobileCompleteExamples = () => {

    const imgBox = {
        boxShadow: "0 5px 80px 3px #E1E1E1",
        borderRadius: "40px",
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
                <Col lg="8" >
                <div style={imgBox}>
                    <br /><br />
                    <div 
                    style={{fontSize:"16px", color:"#71D0D7"}}
                    >
                        개인의 두피 상태 체크 및 개인화된 상품 추천
                    </div>
                    <br />
                    <div style={{fontSize:"30px", fontWeight:"700"}}>
                        니모내모의 가치 
                    </div>
                    <br /><br />
                    <h6 className="description" style={{fontSize:"14px", fontWeight:"1000"}}>
                        우리는 병이 나면 병원에 갑니다. <br/><br/>

                        컨디션 관리를 위해 영양제를 챙겨 먹고, 피부 관리를 위해 좋다는 크림을 찾아 바르죠.  <br/><br/>

                        하지만, 그만큼 중요한 <span style={{color:'#a078ff',fontSize:'16px'}}>두피</span>는 어떻게 관리하고 계신가요? <br/><br/>

                        <span style={{color:'#a078ff',fontSize:'16px'}}>니모내모</span>는 <span style={{color:'#a078ff',fontSize:'16px'}}>두피 관리</span>를 <span style={{color:'#a078ff',fontSize:'16px'}}>자기관리</span>의 영역으로 끌어들이고,  <br/><br/>

                        자기관리 분야의 새로운 지평을 열었습니다. <br/><br/>

                        <span style={{color:'#a078ff',fontSize:'16px'}}>당신만을 위한 두피관리 서비스를 지금 만나보세요.</span> <br/><br/>

                    </h6>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    </>
  );
}

export default MobileCompleteExamples;
