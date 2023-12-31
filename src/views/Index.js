import React, {useState} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// sections for this page

import Tabs from "./index-sections/Tabs.js";
import CarouselM1 from "./index-sections/CarouselM1.js";
import CarouselM2 from "./index-sections/CarouselM2.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Introduction from "./index-sections/Introduction.js";
import MobileIndexHeader from "components/Headers/MobileIndexHeader.js";
import MobileCompleteExamples from "./index-sections/MobileCompleteExamples.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // 화면 크기 변경 감지 함수
    const handleResize = () => {setIsMobile(window.innerWidth <= 992);};
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
      window.removeEventListener('resize', handleResize);
    };
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 792);

  return (
    <>
      {isMobile ? 
        <>
          <IndexNavbar />
          <div className="wrapper">
            <div id="mobileHeader">
              <MobileIndexHeader />
            </div>
            <div className="main">
              <MobileCompleteExamples />
              <Introduction/>
              <CarouselM1/>
              <Tabs/>
              <CarouselM2/>
            </div>
            <DefaultFooter/>
          </div>
        </>
        : 
        <>
          <IndexNavbar />
          <div className="wrapper">
            <div id="desktopHeader">
              <IndexHeader />  
            </div>
            <div className="main">
              <CompleteExamples />
              <Introduction/>
              <CarouselM1/>
              <Tabs/>
              <CarouselM2/>
            </div>
            <DefaultFooter/>
          </div>
        </>
      }
      
    </>
  );
}

export default Index;
