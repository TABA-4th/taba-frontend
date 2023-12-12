import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function AboutpageHeader() {
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
            background: "linear-gradient(#90d8de 60%, white)" 
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h3 className="title">NIMONEMO 팀을 소개합니다.</h3>
            <div className="text-center">
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutpageHeader;
