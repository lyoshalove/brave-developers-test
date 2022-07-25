import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledOperators = styled.div`
  animation: fadeInTop 0.8s forwards;

  @keyframes fadeInTop {
    0% {
      transform: translate(0, -150px);
      opacity: 0;
    }
    ,
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size: 34px;
  text-align: center;

  @media ${theme.media.medium} {
    font-size: 24px;
  }
`;

export const StyledOperatorsCards = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 35px auto 0;
  gap: 15px;
  flex-wrap: wrap;
  @media ${theme.media.medium} {
    flex-wrap: wrap;

  }
  @media ${theme.media.small} {
    flex-direction: column;
  }
`;