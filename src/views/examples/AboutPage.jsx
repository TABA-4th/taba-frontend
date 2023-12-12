import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import AboutpageHeader from "components/Headers/AboutpageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import styled from "styled-components";

function AboutPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
                      src={require("assets/img/teammate_image/kimjungwoo.png")}
                      style={{width:'100px', height: '100px'}}
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">김정우</h4>
                    <p className="category text-info">Project Manager</p>
                    <p className="description">
                      안녕 내이름은 김정우야!{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      "Contribution : 각자 기여항목"
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
                  </div>
                </Col>
                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}  
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">강형철</h4>
                    <p className="category text-info">FrontEnd Features</p>
                    <p className="description">
                      안녕 내이름은 강형철이야!{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      "Contribution : 각자 기여항목"
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
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
                    <p className="category text-info">AI Model</p>
                    <p className="description">
                      안녕 내이름은 서원형이야!{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      "Contribution : 각자 기여항목"
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
                  </div>
                </Col>

              </Row>
              <Row>
                <Col md="4">  {/* 여기서 부터 한 Col당 팀원 한명씩 */}
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}  
                    ></img>{/* assets에 팀원사진 넣어둬야함 */}
                    <h4 className="title">이영주</h4>
                    <p className="category text-info">Backend FLASK</p>
                    <p className="description">
                      안녕 내이름은 이영주야!{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      "Contribution : 각자 기여항목"
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
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
                    <p className="category text-info">FRONTEND UI/UX</p>
                    <p className="description" style={{textAlign: "left"}}>
                      단국대 소프트웨어학과 20학번 천은유입니다. <br />
                      니모내모 서비스에서 프론트엔드 및 UI/UX 디자인을 담당했습니다.
                      웹 및 모바일 앱에서의 전체적인 디자인을 만들고, 검사 진단 및 결과 페이지를 리액트로 개발했습니다.<br />
                      타바가 끝난 후 리액트 공부를 이어나가며, 프론트엔드 신입 개발자로 성장하고 싶습니다.
                      <br />
                    </p>
                    <p className="description">
                      <a href="https://github.com/ChunEunyu" >
                        contact: github
                      </a>{" "}
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
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
                    <p className="category text-info">FrontEnd</p>
                    <p className="description">
                      안녕 내이름은 장시우야!{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      "Contribution : 각자 기여항목"
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
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
