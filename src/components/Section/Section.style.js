import styled, { keyframes } from 'styled-components';

const colorize = keyframes`
  0% {
    transform: translateY(0);
    color: yellow;
  }

  50% {
    transform: translateY(5px);
    color: blue;
  }

  100% {
    transform: translateY(0);
    color: yellow;
  }
`;

export const TitleText = styled.h1`
  font-size: 36px;
  line-height: 1.17;
  text-align: center;
  animation: ${colorize} 1s linear infinite;
`;
