import React , { useEffect, useState } from "react";
import { Container, Button, UncontrolledTooltip } from "reactstrap";
import {useNavigate} from 'react-router-dom';

function IndexHeader() {
  const pageHeader = React.useRef();
  const warningStyle = {
    color: "red",
  };
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    setTooltipVisible(true);
  }, [])

  useEffect(() => {
    const updateScroll = () => {
      if (pageHeader.current) {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      }
    };

    if (window.innerWidth > 991) {
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
          className="page-header-image"
          style={{
            backgroundImage: `url(${require("assets/img/header.png")})`,
          }}
          ref={pageHeader}
        ></div>
        <Container style={{ textAlign: "center", display:'flex' }}>
          {/* 리액트스트랩 Button 컴포넌트로 투명한 버튼 생성 */}
          <Button
            color="link"
            className="transparent-btn"
            onClick={() => window.location.href = "/survey"}
          >
            <h1 id="quickStart" className="category category-absolute" style={{ color: "white" }}>
              <span style={{textDecoration : 'underline'}}>지금 바로 시작하기</span>
            </h1>
          </Button>
          {tooltipVisible == true && <UncontrolledTooltip placement="bottom" target="quickStart" isOpen={true}>
            <span style={{color: 'blue'}}>이곳을 클릭</span>하여 지금바로 시작해보세요!
          </UncontrolledTooltip>}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
