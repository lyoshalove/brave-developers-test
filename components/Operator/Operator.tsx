import React from 'react';
import styled from 'styled-components';

const StyledOperator = styled.button`
  flex: 0 1 calc(33.3% - 10px);
  border: 2px solid #c3c3c3;
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  background: none;
  transition: 0.3s;
  &:hover {
    border: 2px solid #3a86ff;
  }
  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 7.5px);
  }
  @media (max-width: 480px) {
    width: 70%;
  }

  svg {
    width: 150px;
    height: 30px;
  }
`;

interface IProps {
  name: string;
  Svg: () => JSX.Element;
  getOperatorName: (name: string) => void;
  className: string;
}

const Operator = ({ name, Svg, getOperatorName, className }: IProps) => {
  return (
    <StyledOperator className={className} onClick={() => getOperatorName(name)}>
      <Svg />
    </StyledOperator>
  );
};

export default Operator;