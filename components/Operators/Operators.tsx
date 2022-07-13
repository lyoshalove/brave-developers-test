import React from 'react';
import styled from 'styled-components';
import Operator from '../Operator/Operator';
import operators from '../../constants/operators';

const StyledOperators = styled.div`
  animation: fadeInTop 0.8s forwards;

  .home__title {
    font-size: 34px;
  }

  @media (max-width: 768px) {
    .home__title {
      font-size: 24px;
    }
  }

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

const StyledOperatorsCards = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 35px auto 0;
  gap: 15px;
  @media (max-width: 768px) {
    flex-wrap: wrap;

  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

interface IOperators {
  getOperatorName: (name: string) => void;
}

const Operators = ({ getOperatorName }: IOperators) => {
  return (
    <>
      <StyledOperators className="operators">
        <h2 className="home__title center">Выберите мобильного оператора</h2>
        <StyledOperatorsCards className='operators__cards'>
          {operators.map((operator) => {
            return (
              <Operator
                getOperatorName={getOperatorName}
                key={operator.id}
                Svg={operator.image}
                name={operator.name}
                className='operators__card'
              />
            );
          })}
        </StyledOperatorsCards>
      </StyledOperators>
    </>
  );
};

export default Operators;