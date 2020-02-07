import styled, { keyframes } from 'styled-components';


// container for animated SVGs
const AnimateSVG = styled.div`
  position: absolute;
  animation: ${({ animation }) => animation} 7s infinite linear;
  top: ${({ top }) => top || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  right: ${({ right }) => right || 'auto'};
  left: ${({ left }) => left || 'auto'};
  z-index: ${({ behind }) => behind && -2}
`;

// ANIMATIONS

// size pulse
export const slowScaleMove = keyframes`
  0% {
    transform: translate(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: translate(1);
  }
`;

// rotate that S#!t
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default AnimateSVG;