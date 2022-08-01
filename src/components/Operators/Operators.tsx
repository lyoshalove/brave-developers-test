import React from 'react';
import {Operator} from '../Operator/Operator';
import {operators} from '../../constants/operators';
import { StyledOperators, StyledTitle, StyledOperatorsCards } from './styles';

export const Operators: React.FC = () => {
  return (
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
  );
};
