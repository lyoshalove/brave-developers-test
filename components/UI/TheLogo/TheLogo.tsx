import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.div`
  .logo {
    color: #3a86ff;
    font-size: 34px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <a className="logo">Mobile Operators</a>
      </Link>
    </StyledLogo>
  );
};

export default Logo;