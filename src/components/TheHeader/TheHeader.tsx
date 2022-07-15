import React from 'react';
import styled from 'styled-components';
import {Container} from '../Container/Container';
import {Logo} from '../UI/TheLogo/TheLogo';
import Link from 'next/link';

const StyledTheHeader = styled.header`
  padding: 20px 0;
`;

const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled.button`
  color: #3a86ff;
  font-weight: bold;
  border: none;
  background: none;
`;

export const TheHeader: React.FC = () => {
  return (
    <StyledTheHeader>
      <Container>
        <StyledHeaderInner>
          <Logo />
          <Link href="/addOperator">
            <StyledLink>Добавить оператора</StyledLink>
          </Link>
        </StyledHeaderInner>
      </Container>
    </StyledTheHeader>
  );
};