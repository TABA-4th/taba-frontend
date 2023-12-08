import React from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';

const ProductCard = () => {
  // 테스트용 products 데이터
  const products = [
    {
      imageUrl: 'https://i.postimg.cc/CKZkKXyy/2fb36f28695214bdc0faf04c312fdcc5.jpg',
      name: '애쉬로렌 독일 효모 트리트먼트1',
      price: '50,000'
    },
    {
      imageUrl: 'https://i.postimg.cc/CKZkKXyy/2fb36f28695214bdc0faf04c312fdcc5.jpg',
      name: '애쉬로렌 독일 효모 트리트먼트2',
      price: '65,000'
    }
  ];

  return (
    <Card style={{ borderRadius: '15px', backgroundColor: 'white', padding: '10px' }}>
      <CardBody>
        <Row>
          <Col md="8" sm="12">
            <CardTitle tag="h5">
              <i className="fa fa-plus" aria-hidden="true"></i> <div style={{ fontSize: '20px',fontWeight:'bold' }}> ● 검사결과를 바탕으로 추천드려요</div>
            </CardTitle>
            {products.map((product, index) => (
              <Row key={index} style={{ marginBottom: '10px' }}>
                <Col md="4" sm="3" xs="4">
                  <img src={product.imageUrl} alt={product.name} style={{ width:'200px',height:'200px', borderRadius: '10px' }} />
                </Col>
                <Col md="8" sm="9" xs="8">
                  <div style={{ fontSize: '28px' }}>{product.name}</div>
                  <Button color="primary" style={{ fontSize: '20px' }}>구매</Button>
                  <span style={{ fontSize: '20px',marginLeft: '10px' }}>{product.price}원</span>
                </Col>
              </Row>
            ))}
          </Col>
          <Col md="4" sm="12" className="d-flex align-items-center justify-content-center" style={{ minHeight: '100px' }}>
            <Button color="secondary" style={{ width: '90%', height: '60%',fontSize:'28px',fontWeight:800,borderRadius:15,backgroundColor:'#90d8de',padding: '10px 0' }}>더 많은 상품 보기</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
