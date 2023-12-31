import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function MagazinePageHeader() {
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bluehair.jpg") + ")" // 헤더 부분 배경 이미지
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">NIMONEMO MAGAZINE</h1>
            <div className="text-center">
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MagazinePageHeader;
