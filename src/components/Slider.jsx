import React, {Component} from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
max-width:100%;
max-height:100%;
`;

const imgUrl = 'https://i.postimg.cc/VN26km7R/image.png';

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
  { id: 7, url: imgUrl },
  { id: 8, url: imgUrl },
  { id: 9, url: imgUrl },
  { id: 10, url: imgUrl },
];


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      speed:3000,
      autoplaySpeed: 10000,
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };
    return (
      <Container>
        <h2> 니모내모 기능 소개 </h2>
        <StyledSlider {...settings}>
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}