import React from 'react';
import Spinner from "assets/img/spinner.gif";
import styled from 'styled-components';

const LoadingSpinner = (props) => {

  const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;
  return (
    <div>
      <Background>
        <LoadingText>loading ...</LoadingText>
        <img src={Spinner} alt="loading ... " width="5%" />
      </Background>
    </div>
  );
}

export default LoadingSpinner;
