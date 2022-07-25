import styled from "styled-components";

export const StyledAddOperator = styled.section`
  max-width: 500px;
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

export const StyledForm = styled.form`
  margin: 30px 0 20px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
`;