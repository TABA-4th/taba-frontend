// reactstrap components
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';

  //   /**
  //    * name
  //    * price
  //    * imageUrl
  //    * purchaseUrl
  //    */

const HaircareProductCard = ({productInfo}) => {

    return (
        <Card style={{ height: '95%' }}>
          <CardBody>
            <Row style={{ height: '20%' }}>
              <Col>
                <CardTitle>{productInfo.name}</CardTitle>
              </Col>
            </Row>
            <Row style={{ height: '80%' }}>
              <Col>
                <CardText>
                  <img
                    src={productInfo.imageUrl}
                    alt={productInfo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <hr
                    style={{
                      width: '90%',
                      margin: '20px auto',
                      border: '1px solid #DDDDDD',
                    }}
                  ></hr>
                  <p style={{ marginBottom: '10px' }}>가격: {productInfo.price.toLocaleString()} 원</p>
                  <Button href={productInfo.purchaseUrl} color="info">
                    구매링크
                  </Button>
                </CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      );
}
export default HaircareProductCard;

