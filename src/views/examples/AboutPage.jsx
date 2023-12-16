import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import AboutpageHeader from "components/Headers/AboutpageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function AboutPage() {


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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <AboutpageHeader />
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Timonemo</h2>
            <br />
            <div className="team">
              <Row>
              <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/teammate_image/kang.jpg")}  
                      style={{width:'100px', height:'110px'}}
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">강형철</h4>
                    <p className="category text-info">FRONTEND</p>
                    <p className="description">
                      <a href="https://github.com/hckang17">
                        CONTACT : GITHUB
                      </a>
                    </p>
                    <p className="description" style={{textAlign: "left"}}>
                      단국대 모바일시스템공학과 19학번 강형철입니다.
                      이번 NIMONEMO 프로젝트에서 REACT를 기반으로 웹서비스 전반적인 부분을 개발&관리하였습니다.
                      Axios API통신(HTTP), 마이페이지 전기능, 설문조사부터 결과페이지에 이르기까지의 세부기능, 제품추천 페이지 알고리즘을 주로 개발하였고, 예외처리를 맡았습니다.
                      API를 통한 웹서버 통신과 관련된 부분을 더 학습하는 신인 개발자가 되고 싶습니다.
                      <br />
                    </p>
                  </div>
                </Col>

                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/teammate_image/kimjungwoo.png")}
                      style={{width:'100px', height: '105px'}}
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">김정우</h4>
                    <p className="category text-info">LEADER / INFRA / BACKEND</p>
                    <p className="description">
                      <a href="https://github.com/kjungw1025">
                      CONTACT : GITHUB
                      </a>
                    </p>
                    <p className="description" style={{textAlign: "left"}}>
                      단국대 소프트웨어학과 19학번 김정우입니다. <br />
                      니모내모 서비스에서 인프라 구축과 백엔드 개발을 담당했습니다. 
                      AWS를 기반으로 Docker와 Github Actions를 활용하여 인프라를 구축하고
                      SpringBoot와 Flask 프레임워크를 통해 백엔드 개발을 진행했습니다. 
                      앞으로도 해당 분야를 발전시켜 백엔드 신입 개발자로 성장하고 싶습니다.
                      <br /><br />
                    </p>
                  </div>
                </Col>
                
                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/teammate_image/wonhyoungseo.jpg")}  
                      style={{width:'100px', height: '110px'}}
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">서원형</h4>
                    <p className="category text-info">AI / BACKEND </p>
                    <p>
                      <a href="https://github.com/kolo4917">
                      CONTACT : GITHUB
                      </a>
                    </p>
                    <p className="description" style={{textAlign:'left'}}>
                      단국대 모바일시스템공학과 19학번 서원형입니다. 
                      니모내모 서비스에서 전 AI파트를 전담하여 데이터 수집부터 분석, 
                      유효성 검증 모델 , 6가지 증상 판단모델을 구축하여 
                      Flask 프레임워크를 통해 연결하였습니다. 
                      AWS Sagemaker, CUDA ,WandB, Slack과 ML을 적합하게 연결하여 
                      일의 효율성을 높히며 최적 모델을 개발하고자 노력하였으며, 
                      앞으로도 해당 분야를 아우르는 백엔드 개발자가 되기 위해 노력하겠습니다.                     
                    </p>
                  </div>
                </Col>

              </Row>
              <Row>
                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/teammate_image/lee.jpg")}  
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">이영주</h4>
                    <p className="category text-info">BACKEND</p>
                    <p>
                      <a href="https://github.com/0-zoo">
                      CONTACT : GITHUB
                      </a>
                    </p>
                    <p className="description" style={{textAlign: "left"}}>
                      단국대학교 모바일시스템공학과 21학번 이영주 입니다. 
                      니모내모 서비스에서 전반적인 기획과 Flask프레임워크를 통한 
                      백엔드 개발을 맡아 진행했습니다. 
                      앞으로도 기술적인 역량뿐만 아니라 소통과 협업 능력을 더욱 강화하여, 
                      경쟁력 있는 백엔드 개발자로 성장하겠습니다.
                    </p>
                  </div>
                </Col>
                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/teammate_image/jangsiwoo.png")}  
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">장시우</h4>
                    <p className="category text-info">FRONTEND</p>
                    <p>
                      <a href="https://github.com/siwooJang">
                      CONTACT : GITHUB
                      </a> 
                    </p>
                    <p className="description" style={{textAlign: "left"}}>
                      단국대 소프트웨어학과 19학번 장시우입니다. 
                      니모내모 서비스에서 프론트엔드 및 레이아웃 구성을 담당했습니다.
                      프로젝트 초기 구성을 만들고, 홈페이지,매거진 페이지 등과 로그인/회원가입 기능을 구현했습니다. 
                      앞으로도 리액트를 공부해 사용자 친화적인 웹앱을 만드는 프론트엔드 개발자로 성장하겠습니다.{" "}
                    </p>
                  </div>
                </Col>
                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle  img-raised"
                      src={require("assets/img/teammate_image/chuneunyu.jpg")}  
                      style={{width:'100px', height: '110px'}}
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">천은유</h4>
                    <p className="category text-info">FRONTEND</p>
                    <p className="description">
                      <a href="https://github.com/ChunEunyu" >
                        CONTACT : GITHUB
                      </a>
                    </p>
                    <p className="description" style={{textAlign: "left"}}>
                      단국대 소프트웨어학과 20학번 천은유입니다. <br />
                      니모내모 서비스에서 프론트엔드 및 UI/UX 디자인을 담당했습니다.
                      웹 및 모바일 앱에서의 전체적인 디자인을 만들고, 검사 진단 및 결과 페이지를 리액트로 개발했습니다.
                      타바가 끝난 후 리액트 공부를 이어나가며, UI/UX에 대해 고민하는 프론트엔드 신입 개발자로 성장하기 위해 노력하겠습니다.
                      <br />
                    </p>
                  </div>
                </Col>



              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default AboutPage;
