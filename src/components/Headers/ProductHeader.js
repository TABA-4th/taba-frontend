import React from "react";
import { Container } from "reactstrap";


const userName = sessionStorage.getItem("nickname");

function ProductHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (pageHeader.current) {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, [pageHeader]);
  return (
    <>
      <div className="page-header clear-filter page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/shampoo.jpg") + ")"  // 헤더 부분 배경 이미지
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <br /><br /><br />
            <h2 className="title">당신의 두피특성에 딱 맞는 샴푸를 추천해드립니다.</h2>
            <h5>표시되는 가격은 프로모션 및 쇼핑몰 사정 상 실제가격과 일부 차이가 있을 수 있음을 알려드립니다.</h5>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProductHeader;
