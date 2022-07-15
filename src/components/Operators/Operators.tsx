import React from 'react';
import styled from 'styled-components';
import {Operator} from '../Operator/Operator';
import {operators} from '../../constants/operators';

const StyledOperators = styled.div`
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

const StyledTitle = styled.h1`
  font-size: 34px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const StyledOperatorsCards = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 35px auto 0;
  gap: 15px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-wrap: wrap;

  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Operators: React.FC = () => {
  return (
    <>
      <StyledOperators>
        <StyledTitle>Выберите мобильного оператора</StyledTitle>
        <StyledOperatorsCards>
          {operators.map((operator) => {
            return (
              <Operator
                key={operator.id}
                name={operator.name}
                Svg={operator.image}
              />
            );
          })}
        </StyledOperatorsCards>
      </StyledOperators>
    </>
  );
};