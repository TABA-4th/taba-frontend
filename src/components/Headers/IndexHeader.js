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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">n i m o n e m o</h1>
          </div>
          <a href='/survey'>
          <h1 className="category category-absolute" style={{color:'white'}}>
            바로 시작하기!
          </h1></a>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;