import React from 'react';
import SurveyForm from 'views/index-sections/SurveyForm';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DefaultFooter from "components/Footers/DefaultFooter.js";
import { Container, Col } from 'reactstrap';


const SurveyPage = () => {
  return (
    <>
    <IndexNavbar />
    <div style={{width:"100%", height:"75px", backgroundColor:'#9ce8ee'}} />
    {/*<ProfilePageHeader />*/}
    <div className="content">
      <Container style={{paddingLeft: "15%", paddingRight: "15%"}}>
        <Col className="ml-auto mr-auto text-center" md="10">
          <br></br>
          <div className="section">
            <SurveyForm />
          </div>
        </Col>
      </Container>
    </div>
    <DefaultFooter />
    </>
  );
}

export default SurveyPage;