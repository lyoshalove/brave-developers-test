import React from 'react';
import Link from 'next/link';
import { StyledLogo } from './styles';

export const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <StyledLogo>Mobile Operators</StyledLogo>
      </Link>
    </div>
  );
};