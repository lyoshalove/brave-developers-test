import React from 'react';
import {Container} from '../Container/Container';
import {Logo} from '../UI/TheLogo/TheLogo';
import Link from 'next/link';
import { StyledTheHeader, StyledHeaderInner, StyledLink } from './styles';

export const Header: React.FC = () => {
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