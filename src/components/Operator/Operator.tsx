import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import { sliceString } from '../../utils/getSlicedString';

const StyledOperator = styled.a`
  flex: 0 1 calc(33.3% - 10px);
  border: 2px solid #c3c3c3;
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  background: none;
  transition: 0.3s;
  cursor: pointer;
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
  Svg?: () => any;
}

export const Operator: React.FC<IProps> = ({ name, Svg }) => {

  return (
    <Link href={`/payment/${name}`}>
      <StyledOperator>
        {Svg ? <Svg /> : <h2>{sliceString(name)}</h2>}
      </StyledOperator>
    </Link>
  );
};