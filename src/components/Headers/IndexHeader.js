/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";
// core components

function IndexHeader() {
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
      <div className="page-header clear-filter">
        <div
          className="page-header-image "
          style={{
            backgroundImage: "url(" + require("assets/img/header.png") + ")" // 헤더 부분 배경 이미지
          }}
          ref={pageHeader}
        ></div>
        <Container style={{textAlign:'center'}}>
          <a href='/survey'>
            <h1 className="category category-absolute" style={{color:'white'}}>
              바로 시작해보세요!
            </h1>
          </a>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;