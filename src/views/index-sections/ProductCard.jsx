import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col, Badge } from 'reactstrap';
import axios from 'axios';

const fetchProductData = async (payload) => { // 여기서 payload는 {dry:false, greasy:true ... }와 같은 배열
    console.log(payload);
    try {
    const response = await axios.post("http://13.113.206.129:8081/product/shampoo", payload);
    return response.data;
  } catch (error) {
    console.log(error);
    // alert('데이터 수신 문제');
    // 여기서 각 error 종류별로 데이터 처리 필요함.
    return [];
    
  }
}

const ProductCard = (props) => {
  const [products, setProducts] = useState([]); // 상품정보를 표시할 스테이트
  console.log("이 아래는 프로덕트카드 프롭");
  console.log(props.baseData);
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetchProductData(props.baseData);
      setProducts(rawData.slice(0, 2)); // 만약 배열의 길이가 1이라도 괜찮음!
    };

    fetchData();
  }, [props.baseData]);

  return (
    <>
      {products.length == 0 ? <><p>추천드리고 싶으나 제품검색결과가 없습니다</p></>: <></>}
      {products.length > 0 && ( // products 배열이 비어있지 않으면 실행
      <Card style={{ width:'930px' ,borderRadius: '15px', backgroundColor: 'white', padding: '10px' }}>
          <CardBody>
            <Row>
              <Col>
              <CardTitle tag="h5" className="d-flex align-items-center justify-content-between">
                <div style={{width: 'auto'}}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '5px' }}> ● 검사결과를 바탕으로 추천드려요</span><br />
                </div>
              </CardTitle>
                {products.map((product, index) => (
                  <Row key={index} style={{ marginBottom: '10px' }}>
                    <Col md="3" sm="3" xs="3">
                      <img src={product.imageUrl} alt={product.name} style={{ width: 'auto', height: 'auto', borderRadius: '10px' }} />
                    </Col>
                    <Col md="9" sm="9" xs="9">
                      <div style={{ fontSize: '18px', paddingTop: '5px' }}>{product.name}</div>
                      <Button className="btn-sm" color="primary" style={{ fontSize: '20px', borderRadius: '15px' }} href={product.purchaseUrl}>구매링크</Button>
                      <span style={{ fontSize: '17px', marginLeft: '10px' }}>{product.price.toLocaleString()}원</span>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
            <Row>
              <Button 
                style={{ 
                  fontSize: '18px', 
                  fontWeight: "700",
                  borderRadius: "15px", 
                  backgroundColor: '#90d8de', 
                  padding: '10px', 
                  marginLeft: '30%',
                  width: '40%'
                  
                }}
              >
                더 많은 상품보기
              </Button>
            </Row>
          </CardBody>
       </Card>
      )}
    </>
  );
};

export default ProductCard;
