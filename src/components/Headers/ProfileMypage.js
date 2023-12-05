import React from "react";
import { Container } from "reactstrap";
import axios from 'axios';

const userName = sessionStorage.getItem("nickname");

function ProfileMypageHeader() {
  let pageHeader = React.createRef();
  const [diagnosisCount, setDiagnosisCount] = React.useState(0);

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
  }, []);



  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"  // 헤더 부분 배경 이미지
          }}
          ref={pageHeader}
        >
        </div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div>
          {/* <p>(배경이미지를 레벨아이콘으로?)</p> */}
          <h3 className="title" style={{}}>{userName}</h3>
          {/*<p className="category">Photographer</p>*/}
          
          <div className="content">
            <div className="social-description">
              <h2>{diagnosisCount}</h2>
              <p>누적 두피검사수</p>
            </div>
            {/* <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div> 
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfileMypageHeader;
