import React from 'react';
import Link from "next/link";
import { sliceString } from '../../utils/getSlicedString';
import { StyledOperator } from './styles';

interface IProps {
  name: string;
  Svg?: () => React.ReactNode | string;
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