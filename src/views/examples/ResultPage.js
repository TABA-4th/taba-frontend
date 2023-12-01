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


  return (
    <>
      <IndexNavbar />
      <div style={{width:"100%", height:"75px", backgroundColor:"#40CBEA"}} /> {/*NavBar 스타일링*/}
      <div className="wrapper">
        <div className="section">
            <Container className="mx-auto" >
                <Row>
                <Col className="ml-auto mr-auto text-center" md="10">
                    <h1 className="title">ooo님의 두피 검사 결과입니다! </h1>
                    <br /><br /><br /><br />
                    
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
