// reactstrap components
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';



const HaircareProductCard = ({productInfo}) => {

    return (
        <Card>
            <CardBody>
            <CardTitle>{productInfo.name}</CardTitle>
            <CardText>
                <img src={productInfo.imageUrl} alt={productInfo.name} style={{ maxWidth: '100%' }} />
                <p>가격: {productInfo.price} 원</p>
                <Button href={productInfo.purchaseUrl}>구매링크</Button>
            </CardText>
            </CardBody>
        </Card>
    );
};

export default HaircareProductCard;

