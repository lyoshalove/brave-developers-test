import React from 'react';
import styled from 'styled-components';
import {Container} from '../Container/Container';

const StyledFooter = styled.footer`
  margin: auto 0 0;
  padding: 20px 0;
  text-align: center;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <span>made by lyosha</span>
      </Container>
    </StyledFooter>
  );
};