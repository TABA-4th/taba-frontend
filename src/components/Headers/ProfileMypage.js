import React from "react";
import { Container } from "reactstrap";
import axios from 'axios';
import Cookies from 'js-cookie';

const userName = sessionStorage.getItem("nickname");

function ProfileMypageHeader() {
  let pageHeader = React.createRef();
  const [diagnosisCount, setDiagnosisCount] = React.useState(0);
  const [lastDyeDate, setLastDyeDate] = React.useState(null);
  const [lastPermDate, setLastPermDate] = React.useState(null);
  const [daysSinceLastPerm, setDaysSinceLastPerm] = React.useState(null);
  const [daysSinceLastDye, setDaysSinceLastDye] = React.useState(null);
  const accessToken = Cookies.get('access-token');

  const totalDiagnosisResult = async() => {
    try {
      const response = await axios.post(
        `http://13.113.206.129:8081/diagnosis/count?nickname=${userName}`
      );
      setDiagnosisCount(response.data.total);
    } catch(error) {
      console.log(`데이터 반환 실패`);
      setDiagnosisCount(-1);
    }
  }

  const getLastPermDyeDate = async() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios.get(`http://13.113.206.129:8081/hairstatus`, headers);
      if(response.data.startPermDate) {setLastPermDate(response.data.startPermDate);}
      else{setLastPermDate(null);}
      if(response.data.startDyeDate){setLastDyeDate(response.data.startDyeDate);}
      else{setLastDyeDate(null);} 
    } catch (error) {
      alert("파마 염색데이터 수신오류");
    }
  }

  const calculateDaysSinceLastEvent = (lastEventDate) => {
    const today = new Date();
    const lastEvent = new Date(lastEventDate);
    const timeDifference = today - lastEvent;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  React.useEffect(() => {
    totalDiagnosisResult();
    getLastPermDyeDate();
  }, []);

  React.useEffect(() => {
    // Calculate days since last perm and dye when the dates are available
    if (lastPermDate && lastPermDate !== null) {
      setDaysSinceLastPerm(calculateDaysSinceLastEvent(lastPermDate));
    }
    if (lastDyeDate && lastDyeDate !== null) {
      setDaysSinceLastDye(calculateDaysSinceLastEvent(lastDyeDate));
    }
  }, [lastPermDate, lastDyeDate]);


  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image "
          style={{
            backgroundColor: "#fff" // 헤더 색상
          }}
          ref={pageHeader}
        >
        </div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/logo.jpg")}></img>
          </div>
          {/* <p>(배경이미지를 레벨아이콘으로?)</p> */}
          <h3 className="title" style={{}}>{userName} 님</h3>
          {/*<p className="category">Photographer</p>*/}
          
          <div className="content">
            <div className="social-description">
              <p>누적 두피검사수</p>
              <h2>{diagnosisCount}<span style={{fontSize: '23px'}}>건</span></h2>
            </div>
              {/* Conditionally render days since last perm if lastPermDate is not "null" */}
              {lastPermDate !== null && (
                <div className="social-description">
                  <p>파마일로부터</p>
                  <h2>{daysSinceLastPerm}일<span style={{fontSize: '23px'}}>째</span></h2>
                </div>
              )}

              {/* Conditionally render days since last dye if lastDyeDate is not "null" */}
              {lastDyeDate !== null && (
                <div className="social-description">
                  <p>염색일로부터</p>
                  <h2>{daysSinceLastDye}일<span style={{fontSize: '23px'}}>째</span></h2>
                </div>
              )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfileMypageHeader;
