import React, {useState} from 'react';
import axios from 'axios';
import ResultGraph from 'views/index-sections/ResultChart';
import VBarChart from 'views/index-sections/verticalBarChart';
import {
    Collapse, Button, CardBody, Card, CardTitle, UncontrolledTooltip,
    Container,
    Row,
    Col,
  } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";  
import ProductCard from 'views/index-sections/ProductCard';

const divisionLine = {
  borderTop: "5px solid #F0F0F0",
  margin: "30px 0px", 
}

  // 박스 안에 글 넣기
const imgBox = {
  boxShadow: "0 5px 100px 3px #E8E8E8",
  borderRadius: "30px",
  width: "1200px",
  minHeight: "800px",
  paddingLeft: "30px",
  paddingRight: "30px",
  paddingBottom: "30px",
  paddingTop: "30px",
}

const mobileImgBox = {
  boxShadow: "0 5px 100px 3px #E8E8E8",
  borderRadius: "30px",
  width: "100%",
  minHeight: "800px",
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

function ClearSessionItem() {
  sessionStorage.removeItem('diagnosisData');
  sessionStorage.removeItem('recommend_or_not');
  sessionStorage.removeItem('old');
}

function recommendBaseData(d) {
  const DATA = {
    "dry": d.dry,
    "greasy": d.greasy,
    "sensitive": d.sensitive,
    "dermatitis": d.dermatitis,
    "neutral": d.neutral,
    "loss": d.loss
  };  // 샴푸추천 알고리즘에 쓰일 데이터
  return DATA;
}

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
    "erythema_pustules" : erythemaPustules,
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
    "erythema_pustules" : avgErythemaPustules,
  };
  // console.log('데이터!');
  // console.log(Data);
  return Data;
}

const renderRankText = (d) => {
  const resultTextStyle = {
    // marginBottom: 'px',
  };

  return (
    <>
      <h5 style={resultTextStyle}> 미세각질 항목은 <span style={{color: 'red'}}>상위 {d.FINE_DEAD_SKIN_CELLS}%</span>입니다.</h5>
      <h5 style={resultTextStyle}> 피지과다 항목은 <span style={{color: 'red'}}>상위 {d.EXCESS_SEBUM}%</span>입니다.</h5>
      <h5 style={resultTextStyle}> 모낭간 홍반 항목 <span style={{color: 'red'}}>상위 {d.ERYTHEMA_BETWEEN_HAIR_FOLLICLES}%</span>입니다.</h5>
      <h5 style={resultTextStyle}> 비듬 항목은 상위 <span style={{color: 'red'}}>상위 {d.DANDRUFF}%</span>입니다.</h5>
      <h5 style={resultTextStyle}> 탈모위험성 항목은 <span style={{color: 'red'}}>상위 {d.HAIR_LOSS}%</span>입니다.</h5>
      <h5 style={resultTextStyle}> 모낭간 홍반농포 항목은 <span style={{color: 'red'}}>상위 {d.ERYTHEMA_PUSTULES}%</span>입니다.</h5>
    </>
  );
}

function ResultPage () {
  const [collapseIsOpen, setCollapseIsOpen] = useState(false);  // 콜랍스 효과를 위한 스테이트 훅
  const toggle = () => setCollapseIsOpen(!collapseIsOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

    // 세션 스토리지에서 nickname 가져오기
  const nickname = sessionStorage.getItem('nickname');
  const diagnosisData = JSON.parse(sessionStorage.getItem('diagnosisData'));
  const recommendation = sessionStorage.getItem('recommend_or_not');

  // 사진업로드 -> 결과화면 & 마이페이지 -> 결과화면에서 넘겨주는 데이터가 서로 다르니.. 어쩔수 없는 부분이긴한데
  const old = diagnosisData.old ? diagnosisData.old : sessionStorage.getItem('old');
  const url = diagnosisData.url;

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

  // console.log(diagnosisData.url);

  // 현재 날짜 출력하기
  const today = new Date();
  const formattedDate = diagnosisData.diagnosisDate ? diagnosisData.diagnosisDate : `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
  // const formattedDate = sessionStorage.getItem('diagnosisDate');
   
  return (
    <>
      {isMobile?
        <>
        <IndexNavbar />
        <div style={{width:"100%", height:"75px", backgroundColor:'#9ce8ee'}} /> {/*NavBar 스타일링*/}
        <div className="wrapper">
          <div className="section">
              <Container className="mx-auto" >
                  <Row>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <h4 className="title">📈 {nickname}님의 두피 분석 레포트</h4>
                    <br />
                    <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={mobileImgBox}>
                        <h5 className='title'>검사일시 : {formattedDate} </h5>
                        <img src={url} width={"150px"} style={{ borderRadius: '30px', boxShadow: "0 2px 10px 3px #E1E1E1" }}></img>
                        <br />
                        <h5 className='title'>{nickname}님의 두피진단 결과입니다.</h5>
                        
                        <div style={divisionLine}></div> {/* 구분선 */}
                        <div className="wrapper text-center" style={{margin:'0 auto'}}>
                          <div style={{justifyContent: 'center', display: 'flex'}}>
                            <VBarChart graphData={renderGraphData(diagnosisData)}/>
                          </div>
                          <div style={divisionLine}></div> {/* 구분선 */}
                          <div>
                            <h4> 〃종합적으로 {nickname}님의 두피는 동년배 기준 <span style={{color: 'red'}}>상위 {diagnosisData.total}%</span>로 평가됩니다.〃</h4>
                          </div>

                          <Button                             
                            onClick={toggle} 
                            style={{ 
                              width: '80%', 
                              marginBottom: '1rem', 
                              borderRadius: '15px',
                              fontWeight: '800',
                              backgroundColor: "#9ce8ee",
                              fontSize: 'larger'
                          }}>
                            √ 검사결과 자세히 보기
                          </Button>
                          <Collapse isOpen={collapseIsOpen}>
                            <div>
                              <ResultGraph old={old} graphData={renderGraphData(diagnosisData)} avgGraphData={renderAvgGraphData(diagnosisData)} />
                            </div>
                            <div className="text-center">
                              {renderRankText(diagnosisData)}
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </Col>
                  </Row>
                  <br />
                  <hr/><hr/>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {recommendation == 1 && <ProductCard baseData={recommendBaseData(diagnosisData)}/>}
                  </div>
              </Container>
          </div>
        </div>
        <br /><br /><br />
        <DefaultFooter />
        {/* {ClearSessionItem()} */}
      </>
        :
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
                      <div style={divisionLine}></div> {/* 구분선 */}
                      <div className="wrapper text-center" style={{margin:'0 auto'}}>
                        <div style={{justifyContent: 'center', display: 'flex'}}>
                          <VBarChart graphData={renderGraphData(diagnosisData)}/>
                        </div>
                        <div style={divisionLine}></div> {/* 구분선 */}
                        <div>
                          <h4> 〃종합적으로 {nickname}님의 두피는 동년배 기준 <span style={{color: 'red'}}>상위 {diagnosisData.total}%</span>로 평가됩니다.〃</h4>
                        </div>
                        <Button 
                          onClick={toggle} 
                          style={{ 
                            width: '80%', 
                            marginBottom: '1rem',
                            borderRadius: '15px',
                            backgroundColor: '#9ce8ee',
                            fontSize: 'larger',
                            fontWeight: '800',
                          }}
                        >
                          √ 검사결과 자세히 보기
                        </Button>
                        <Collapse isOpen={collapseIsOpen} >
                          <div>
                              <ResultGraph old={old} graphData={renderGraphData(diagnosisData)} avgGraphData={renderAvgGraphData(diagnosisData)} />
                          </div>                          
                          <div className="text-center">
                            {renderRankText(diagnosisData)}
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </Col>
                </Row>
                <br />
                <hr/><hr/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {recommendation == 1 && <ProductCard baseData={recommendBaseData(diagnosisData)}/>}
                </div>
            </Container>
        </div>
      </div>
      <br /><br /><br />
      <DefaultFooter />
      {/* {ClearSessionItem()} */}
      </>
      }

    </>
  );
}

export default ResultPage;

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
      old: old데이터
  */