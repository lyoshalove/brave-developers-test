import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledPayment = styled.div`
  max-width: 400px;
  margin: 0 auto;
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

export const StyledForm = styled.form`
  margin: 30px 0 20px;
`;

export const StyledLogo = styled.div`
  margin: 0 auto;
  text-align: center;
  word-break: break-word;

  svg {
    max-width: 150px;
    width: 100%;
  }
`;

export const StyledBack = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.secondary};
  font-weight: bold;
  margin: 0 0 20px;
`;