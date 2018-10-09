import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAni = keyframes`
  0% {
    margin: 0;
  }
  50% {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  100% {
    margin: 0;
  }
`;
const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;
`;
const CircleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  animation: ${LoadingAni} 1s ease-in-out infinite;
  background-color: ${props => {
    if(props.first) {
      return "#BBB";
    } else if (props.second) {
      return "#7c899b";
    } else if (props.third) {
      return "#444B55";
    }
  }};
`;


const Loading = () => {
  return (
    <LoadingBox>
      <CircleBox>
        <Circle first />
        <Circle second />
        <Circle third />
      </CircleBox>
    </LoadingBox>
  );
};

export default Loading;
