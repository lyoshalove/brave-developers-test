import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.svg`
  width: 22px;

  #spinner {
    transform-origin: center;
    animation-name: animation;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
    fill: transparent;
    stroke: #fff;
    stroke-width: 7px;
    stroke-linecap: round;
    filter: url(#shadow);
    transition: .3s;
  }

  @keyframes animation {
    0% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -105;
    }
    50% {
      stroke-dasharray: 80 10;
      stroke-dashoffset: -160;
    }
    100% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -300;
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader viewBox="0 0 100 100">
      <defs>
        <filter id="shadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1.5"
            color="#fc6767"
          />
        </filter>
      </defs>
      <circle
        id="spinner"
        cx="50"
        cy="50"
        r="45"
      />
    </StyledLoader>
  );
};

export default Loader;