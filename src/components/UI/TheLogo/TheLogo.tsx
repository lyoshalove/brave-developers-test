import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.a`
  color: #3a86ff;
  font-size: 34px;
  font-weight: bold;
  margin: 0 35px 0 0;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <StyledLogo>Mobile Operators</StyledLogo>
      </Link>
    </div>
  );
};