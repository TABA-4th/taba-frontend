import React from "react";
import { Container } from "reactstrap";


const userName = sessionStorage.getItem("nickname");

function ProductHeader() {
  let pageHeader = React.createRef();

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
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/shampoo.jpg") + ")"  // 헤더 부분 배경 이미지
          }}
          ref={pageHeader}
        ></div>
        <Container>
          {/* <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div> */}
          <br /><br />
          <h1 className="title">당신의 두피특성에 딱 맞는 샴푸 추천!</h1>
          <h6>표시되는 가격은 프로모션 및 쇼핑몰 사정 상 실제가격과 일부 차이가 있을 수 있음을 알려드립니다.</h6>
          {/*<p className="category">Photographer</p>*/} 
          
          {/* 여기다가 총 검사건수
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>

            
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div> */}
        </Container>
      </div>
    </>
  );
}

export default ProductHeader;
