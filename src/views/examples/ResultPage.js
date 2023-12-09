import React from 'react';
import axios from 'axios';
import ResultGraph from 'views/index-sections/ResultChart';
import VBarChart from 'views/index-sections/verticalBarChart';
import {
    Container,
    Row,
    Col,
  } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";  

const divisionLine = {
  borderTop: "5px solid #F0F0F0",
  margin: "30px 0px", 
}

function ClearSessionItem() {
  sessionStorage.removeItem('diagnosisData');
  sessionStorage.removeItem('diagnosisDate');
}

  /* 
    FileUpload로 부터 받은 response.DATA JSON파일에 들어있는 데이터의 파일구조
    └ㅡㅡDATA.class
        0: dry (미세 각질)
        1: greasy (피지 과다)
        2: erythema between hair follicles (모낭 사이 홍반)
        3: dandruff (비듬)
        4: loss (탈모)
        5: erythema pustules (모낭 홍반 농포)
    └ㅡㅡDATA.avgClass
        0: dry (미세 각질)
        1: greasy (피지 과다)
        2: erythema between hair follicles (모낭 사이 홍반)
        3: dandruff (비듬)
        4: loss (탈모)
        5: erythema pustules (모낭 홍반 농포)
    └ㅡ DATA.각항목 ()
      DANDRUFF: %f   => 비듬 상위퍼센트
      ERYTHEMA_BETWEEN_HAIR_FOLLICLES: %f => 모낭간 홍반 %백분률
      ERYTHEMA_PUSTULES: %f       => 모낭 홍반 농포 %백분률
      EXCESS_SEBUM: %f            => 피지 과다 % 백분률
      FINE_DEAD_SKIN_CELLS: %f    => 미세각질 % 백분률
      HAIR_LOSS: %f               => 탈모 % 백분률
      total : %f                  => 종합성적 % 백분률
    └ㅡ DATA.각항목 ()     => 샴푸제품 추천 내용 관련
      dermatitis: false
      dry: false
      greasy: true
      loss: false
      neutral: true
      sensitive: false
    └ㅡ DATA.각항목 ()
      msg: "Data saved to database successfully"
      url: " URL "
  */

function renderGraphData(DATA) {
  const dry = DATA.class[0];
  const greasy = DATA.class[1];
  const erythemaBetweenHairFollicles = DATA.class[2];
  const dandruff = DATA.class[3];
  const loss = DATA.class[4];
  const erythemaPustules = DATA.class[5];
  const Data = {
    "dry" : dry,
    "greasy" : greasy,
    "erythema_between_hair_follicles" : erythemaBetweenHairFollicles,
    "dandruff" : dandruff,
    "loss" : loss,
    "erythema_pustules" : erythemaPustules
  };
  // console.log('데이터!');
  // console.log(Data);
  return Data;
}



function renderAvgGraphData(DATA) {
  const avgDry = DATA.avgClass[0];
  const avgGreasy = DATA.avgClass[1];
  const avgErythemaBetweenHairFollicles = DATA.avgClass[2];
  const avgDandruff = DATA.avgClass[3];
  const avgLoss = DATA.avgClass[4];
  const avgErythemaPustules = DATA.avgClass[5];
  const Data = {
    "dry" : avgDry,
    "greasy" : avgGreasy,
    "erythema_between_hair_follicles" : avgErythemaBetweenHairFollicles,
    "dandruff" : avgDandruff,
    "loss" : avgLoss,
    "erythema_pustules" : avgErythemaPustules
  };
  // console.log('데이터!');
  // console.log(Data);
  return Data;
}

function ResultPage () {
  // const [isCollapsed, setCollapsed] = useState(true);
  // const toggleCollapse = () => {
  //   setCollapsed(!isCollapsed);
  // };
    // 세션 스토리지에서 nickname 가져오기
  const nickname = sessionStorage.getItem('nickname');
  const diagnosisData = JSON.parse(sessionStorage.getItem('diagnosisData'));

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


  console.log(diagnosisData.url);

  // 세션 스토리지에서 이미지 URL 가져오기
  const url = diagnosisData.url;

  // 세션 스토리지에서 검사 결과 가져오기
  /* 
    0: dry (미세 각질)
    1: greasy (피지 과다)
    2: erythema between hair follicles (모낭 사이 홍반)
    3: dandruff (비듬)
    4: loss (탈모)
    5: erythema pustules (모낭 홍반 농포)
  */

  // 현재 날짜 출력하기
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
  // const formattedDate = sessionStorage.getItem('diagnosisDate');

  // 박스 안에 글 넣기
  const imgBox = {
    boxShadow: "0 5px 100px 3px #E8E8E8",
    borderRadius: "30px",
    width: "900px",
    minHeight: "1400px",
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
      <div style={{width:"100%", height:"75px", backgroundColor:'#9ce8ee'}} /> {/*NavBar 스타일링*/}
      <div className="wrapper">
        <div className="section">
            <Container className="mx-auto" >
                <Row>
                <Col className="ml-auto mr-auto text-center" md="10">
                  <h2 className="title">📈 {nickname}님의 두피 분석 레포트</h2>
                  <br /><br />
                  <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={imgBox}>
                      <h3 className='title'>검사일시 : {formattedDate} </h3>
                      <img src={url} width={"300px"} style={{ borderRadius: '30px', boxShadow: "0 2px 10px 3px #E1E1E1" }}></img>
                      <br />
                      <h3 className='title'>{nickname}님의 두피진단 결과입니다.</h3>
                      <div className="wrapper text-center" style={{margin:'0 auto'}}>
                        <div style={{justifyContent: 'center', display: 'flex'}}>
                          <VBarChart graphData={renderGraphData(diagnosisData)}/>
                        </div>
                        <div style={divisionLine}></div>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                          <ResultGraph graphData={renderGraphData(diagnosisData)} avgGraphData={renderAvgGraphData(diagnosisData)} />
                        </div>

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
      {ClearSessionItem()}
    </>
  );
}

export default ResultPage;
