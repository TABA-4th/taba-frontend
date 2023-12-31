// Import necessary components
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import { Row, Col, Button, ButtonGroup, Container } from 'reactstrap';
//import DarkNavbar from 'components/Navbars/DarkNavbar';
import HaircareProductCard from "views/index-sections/HaircareProductCard";
import ProductHeader from "components/Headers/ProductHeader";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

const noContentsImgURL = require("assets/img/NoContents.png");

function HaircareProductPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation();
  const dataFromResult = location.state;
  console.log(dataFromResult);

  const [productInfo, setProductInfo] = useState([]);
  const [buttonStates, setButtonStates] = useState({
    dry: { isActive: dataFromResult?.dry || false, text: "건성" },
    greasy: { isActive: dataFromResult?.greasy || false, text: "지성" },
    sensitive: { isActive: dataFromResult?.sensitive || false, text: "민감성" },
    dermatitis: { isActive: dataFromResult?.dermatitis || false, text: "피부염" },
    neutral: { isActive: dataFromResult?.neutral || false, text: "중성" },
    loss: { isActive: dataFromResult?.loss || false, text: "탈모" },
  });

  const [comment, setComment] = useState("");
  const handleButtonClick = (button) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [button]: {
        ...prevState[button],
        isActive: !prevState[button].isActive,
      },
    }));
  };
  const handleSearchClick = () => {
    fetchHairStatus();
    setComment(stringifyProperties(buttonStates));
  };
  const fetchHairStatus = async () => {
    try {
      const response = await axios.post(
        "http://13.113.206.129:8081/product/shampoo",
        {
          dry: buttonStates.dry.isActive,
          greasy: buttonStates.greasy.isActive,
          sensitive: buttonStates.sensitive.isActive,
          dermatitis: buttonStates.dermatitis.isActive,
          neutral: buttonStates.neutral.isActive,
          loss: buttonStates.loss.isActive,
        }
      );
      setProductInfo(response.data);
      console.log('데이터 불러오기 성공');
      // alert(JSON.stringify(response.data));
    } catch (error) {
      console.log('데이터 불러오기 실패');
      console.log(error);
      setProductInfo([]);
    }
  };
  
  //한 row에 chunkSize개수만큼의 제품카드를 표시하기 위한 전처리작업.
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };
  const stringifyProperties = (ButtonStates) => {
    let comment = ``;
  
    Object.keys(ButtonStates).forEach((button) => {
      if (ButtonStates[button].isActive) {
        comment += `${ButtonStates[button].text}, `;
      }
    });
    if(comment === ``){
      comment = ``;
    }else{
      comment = comment.slice(0, -2);
      comment += `에 좋은 제품을 추천해드립니다!`;
    }
    return comment;
  };
  // 문자열 출력을 위한 함수.

  //한 열당 3개의 카드를 표시하기 위해 데이터 전처리
  const rows = chunkArray(productInfo, 3);

  useEffect(() => {
    fetchHairStatus();
    setComment(stringifyProperties(buttonStates));
    // 화면 크기 변경 감지 함수
    const handleResize = () => {setIsMobile(window.innerWidth <= 992);};
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? 
        <>
          <IndexNavbar />
          <div className="wrapper">
            <ProductHeader />
            <div className="section section-about-us">
              <Container>
                <Row>
                <div className="wrapper text-center" style={{width: '100%', alignContent: 'center'}} >
                  <ButtonGroup style={{width: '100%'}}>
                            {Object.keys(buttonStates).map((button) => (
                              <Button
                                size={isMobile ? 'rg' : 'lg'}
                                key={button}
                                color={buttonStates[button].isActive ? 'primary' : 'secondary'}
                                onClick={() => handleButtonClick(button)}
                                style={{
                                  width: "8px",
                                  margin: '2px', 
                                  borderRadius: '13px', 
                                  fontWeight: 700,
                                  fontSize: '15px',
                                }}
                              >
                                {buttonStates[button].text}
                              </Button>
                            ))}
                      </ButtonGroup>
    
                      <Button 
                        style={{
                          background:"#90d8de",
                          border:"1px solid #fff",
                          width:"170px",
                          height:"51px",
                          fontWeight: "#fff",
                          fontWeight:700,
                          fontSize:"17px",
                          paddingTop: "15px",
                          borderRadius: "13px",
                        }}
                        onClick={handleSearchClick} 
                        size="lg">
                        검색
                      </Button>
                      <hr style={{ width: '70%', margin: '20px auto', border: '1px solid #ddd' }} />
                    </div>
    
                    <br></br>
    
                    <div className="wrapper text-center" style={{ width: '70%', margin: 'auto' }}>
                      {rows.length === 0 ? (
                        <img src={noContentsImgURL} alt={"No Contents"}/>
                      ) : (
                        <div>
                          <h3>{comment}</h3>
                          {rows.map((row, rowIndex) => (
                            <Row key={rowIndex}>
                              {row.map((product, index) => (
                                <Col key={index} md={4}>
                                  <HaircareProductCard productInfo={product} />
                                </Col>
                              ))}
                            </Row>
                          ))}
                      </div>
                    )}
                  </div>
                                
                </Row>
              </Container>
            </div>        
            <DefaultFooter />
          </div>
        </>

        : 
        <>
          <IndexNavbar />
            <div className="wrapper">
            <ProductHeader />
            <div className="section section-about-us">
              <Container>
                <Row>
                <div className="wrapper text-center" style={{width: '100%', alignContent: 'center'}} >
                  <ButtonGroup style={{width: '100%'}}>
                            {Object.keys(buttonStates).map((button) => (
                              <Button
                                size={isMobile ? 'rg' : 'lg'}
                                key={button}
                                color={buttonStates[button].isActive ? 'primary' : 'secondary'}
                                onClick={() => handleButtonClick(button)}
                                style={{
                                  margin: '10px', 
                                  borderRadius: '13px', 
                                  fontWeight: 700,
                                  fontSize: '15px',
                                }}
                              >
                                {buttonStates[button].text}
                              </Button>
                            ))}
                      </ButtonGroup>

                      <Button 
                        style={{
                          background:"#90d8de",
                          border:"1px solid #fff",
                          width:"170px",
                          height:"51px",
                          fontWeight: "#fff",
                          fontWeight:700,
                          fontSize:"17px",
                          paddingTop: "15px",
                          borderRadius: "13px",
                        }}
                        onClick={handleSearchClick} 
                        size="lg">
                        검색
                      </Button>
                      <hr style={{ width: '70%', margin: '20px auto', border: '1px solid #ddd' }} />
                    </div>

                    <br></br>

                    <div className="wrapper text-center" style={{ width: '70%', margin: 'auto' }}>
                      {rows.length === 0 ? (
                        <img src={noContentsImgURL} alt={"No Contents"}/>
                      ) : (
                        <div>
                          <h3>{comment}</h3>
                          {rows.map((row, rowIndex) => (
                            <Row key={rowIndex}>
                              {row.map((product, index) => (
                                <Col key={index} md={4}>
                                  <HaircareProductCard productInfo={product} />
                                </Col>
                              ))}
                            </Row>
                          ))}
                      </div>
                    )}
                  </div>

                </Row>
              </Container>
            </div>        
          <DefaultFooter />
        </div>
      </>
      }
      
    </>
  );
}

export default HaircareProductPage;
