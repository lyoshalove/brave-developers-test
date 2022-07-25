import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledLoader = styled.svg`
  width: 22px;

  #spinner {
    transform-origin: center;
    animation-name: animation;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
    fill: transparent;
    stroke: ${theme.colors.white};
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