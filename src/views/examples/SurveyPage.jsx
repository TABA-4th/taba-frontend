import React from 'react';
import SurveyForm from 'views/index-sections/SurveyForm';
import DarkNavbar from 'components/Navbars/DarkNavbar';
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DefaultFooter from "components/Footers/DefaultFooter.js";


const SurveyPage = () => {
  return (
    <>
    <IndexNavbar />
    <div style={{width:"100%", height:"75px", backgroundColor:"#40CBEA"}} />
    {/*<ProfilePageHeader />*/}
    <br></br>
    <div className="wrapper" style={{width: '70%', margin: '0 auto', justifyContent: 'center'}}>
        <br></br>
        <div className="section" style={{margin: '0 auto'}}>
          <SurveyForm />
        </div>

    </div>
    <DefaultFooter />
    </>
  );
}

export default SurveyPage;