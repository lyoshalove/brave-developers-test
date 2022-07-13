import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

const StyledFooter = styled.footer`
  margin: auto 0 0;
  padding: 20px 0;
`;

const TheFooter = () => {
  return (
    <StyledFooter className='center'>
      <Container>
        <div className="footer__inner">
          <span className="footer__description">made by lyosha</span>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default TheFooter;