import styled, { keyframes } from 'styled-components'

const animationOne = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }

`
const animationTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }

`
const animationThree = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }

`
export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoadingElement = styled.div`
  width: 80px;
  position: relative;

  div {
    position: absolute;
    top: -1px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: white;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${animationOne} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${animationTwo} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${animationTwo} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${animationThree} 0.6s infinite;
  }
`
