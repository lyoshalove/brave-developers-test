import React from 'react';
import Link from "next/link";
import { sliceString } from '../../utils/getSlicedString';
import { StyledOperator } from './styles';
import Image from 'next/image';

interface IProps {
  name: string;
  Svg?: string;
}

export const Operator: React.FC<IProps> = ({ name, Svg }) => {

  return (
    <Link href={`/payment/${name}`}>
      <StyledOperator>
        {Svg ? (
          <Image src={Svg} alt={name} height="30" width={150} />
        ) : (
          <h2>{sliceString(name)}</h2>
        )}
      </StyledOperator>
    </Link>
  );
};