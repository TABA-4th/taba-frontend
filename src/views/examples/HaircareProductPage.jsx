// Import necessary components
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import DarkNavbar from 'components/Navbars/DarkNavbar';
import HaircareProductCard from "views/index-sections/HaircareProductCard";

function HaircareProductPage() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    const fetchHairStatus = async () => {
      try {
        const response = await axios.post(
          "http://13.113.206.129:8081/product/shampoo",
          {
            dry: false,
            greasy: false,
            sensitive: false,
            dermatitis: false,
            neutral: false,
            loss: true,
          }
        );
        setProductInfo(response.data);
        alert('데이터 불러오기 성공');
        alert(JSON.stringify(response.data));
      } catch (error) {
        alert('데이터 불러오기 실패');
      }
    };

    fetchHairStatus();
    /**
     * name
     * price
     * imageUrl
     * purchaseUrl
     */
  }, []);

  //한 row에 chunkSize개수만큼의 제품카드를 표시하기 위한 작업.
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  //한 열당 3개의 카드를 표시하기 위해 데이터 전처리
  const rows = chunkArray(productInfo, 3);

  return (
    <>
      <DarkNavbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="wrapper" style={{ width: '70%', margin: 'auto' }}>
        {/* Map through rows and create a row for each set of three cards */}
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {/* Map through the cards in the row and create HaircareProductCard for each item */}
            {row.map((product, index) => (
              <Col key={index} md={4}>
                <HaircareProductCard productInfo={product} />
                {/* HaircareProductCard 컴포넌트로 productInfo 프롭으로 product를 넘겨줌. */}
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </>
  );
}

export default HaircareProductPage;
