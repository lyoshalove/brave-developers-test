import React from 'react';
import styled from 'styled-components';
import {Container} from '../Container/Container';

const StyledFooter = styled.footer`
  margin: auto 0 0;
  padding: 30px 0 15px;
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