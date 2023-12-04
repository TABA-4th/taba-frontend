import React from 'react';
import axios from 'axios';

// reactstrap components
import {
    Container,
    Row,
    Col,
  } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";  

function ResultPage () {

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
    }, []);

  // 세션 스토리지에서 nickname 가져오기
  const nickname = sessionStorage.getItem('nickname');

  // 세션 스토리지에서 이미지 URL 가져오기
  const url = sessionStorage.getItem('imgUrl');

  // 세션 스토리지에서 검사 결과 가져오기
  /* 
    0: dry (미세 각질)
    1: greasy (피지 과다)
    2: erythema between hair follicles (모낭 사이 홍반)
    3: dandruff (비듬)
    4: loss (탈모)
    5: erythema pustules (모낭 홍반 농포)
  */
  const dry = sessionStorage.getItem('dry');
  const greasy = sessionStorage.getItem('greasy');
  const erythemaBetweenHairFollicles = sessionStorage.getItem('erythema_between_hairFollicles');
  const dandruff = sessionStorage.getItem('dandruff');
  const loss = sessionStorage.getItem('loss');
  const erythemaPustules = sessionStorage.getItem('erythema_pustules');

  // 현재 날짜 출력하기
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;

  // 박스 안에 글 넣기
  const imgBox = {
    boxShadow: "0 5px 100px 3px #E8E8E8",
    borderRadius: "30px",
    width: "900px",
    height: "900px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    paddingTop: "30px",
  }

  // 버튼
  const btnStyle = {
    background:"#2ca8ff",
    border:"1px solid #2ca8ff",
    width:"400px",
    height:"80px",
    color: "white",
    fontWeight:1000,
    fontSize:"30px",
  }
  
    
  return (
    <>
      <IndexNavbar />
      <div style={{width:"100%", height:"75px", backgroundColor:"#2ca8ff"}} /> {/*NavBar 스타일링*/}
      <div className="wrapper">
        <div className="section">
            <Container className="mx-auto" >
                <Row>
                <Col className="ml-auto mr-auto text-center" md="10">
                  <h2 className="title">📈 {nickname}님의 두피 분석 레포트</h2>
                  <br /><br />
                  <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={imgBox}>
                      <h3 className='title'>{formattedDate} </h3>
                      <img src={url} width={"300px"} style={{ borderRadius: '30px', boxShadow: "0 2px 10px 3px #E1E1E1" }}></img>
                      <br />
                      <h3 className='title'>{nickname}님의 결과입니다.</h3>
                      <div>
                        <h5>
                          미세 각질: {dry} <br />
                          피지 과다: {greasy} <br />
                          모낭 사이 홍반: {erythemaBetweenHairFollicles} <br />
                          비듬: {dandruff}<br />
                          탈모: {loss} <br />
                          모낭 홍반 농포: {erythemaPustules} <br />

                        </h5>
                        
                      </div>
                    </div>
                  </div>

                </Col>
                </Row>
            </Container>
        </div>
      </div>
      <br /><br /><br />
      <DefaultFooter />
    </>
  );
}

export default ResultPage;
