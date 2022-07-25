import React from 'react';
import {Container} from '../Container/Container';
import { StyledFooter } from './styles';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <span>made by lyosha</span>
      </Container>
    </StyledFooter>
  );
};