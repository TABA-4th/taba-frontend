import React from 'react';

// reactstrap components
import { Container,Button, UncontrolledTooltip } from "reactstrap";

const MobileIndexHeader = () => {

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
      <div className="page-header clear-filter">
        <div
          className="page-header-image "
          style={{
            backgroundImage: "url(" + require("assets/img/mobileheader.png") + ")" // 헤더 부분 배경 이미지
          }}
          ref={pageHeader}
        ></div>
        <Container style={{textAlign:'center', display:'flex'}}>
          <Button
            color="link"
            className="transparent-btn"
            onClick={() => window.location.href = "/survey"}
          >
            <h2 id="quickStart" className="category category-absolute" style={{ color: "white" }}>
              지금바로 시작하기
            </h2>
          </Button>
          <UncontrolledTooltip placement="bottom" target="quickStart" isOpen={true}>
            <span style={{color: 'blue'}}>이곳을 클릭</span>하고 지금바로 시작해보세요!
          </UncontrolledTooltip>
        </Container>
      </div>
    </>
  );
}

export default MobileIndexHeader;
