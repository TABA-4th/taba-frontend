import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
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

const items = [
  { id: 1, url: 'https://i.postimg.cc/XNt0Y5GS/Kakao-Talk-20231116-164738879.png' },
  { id: 2, url: 'https://i.postimg.cc/prwkMRL4/Kakao-Talk-20231116-164738879-01.png' },
  { id: 3, url: 'https://i.postimg.cc/1R8QSBzr/Kakao-Talk-20231116-164738879-02.png' },

];


export default class MainSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      speed:3000,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };
    return (
      <Container>
        <h2 style={{
              justifyContent: "center", 
              textAlign: "center"
            }}> 니모내모 기능 소개 </h2>
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