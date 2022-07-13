import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import Logo from '../UI/TheLogo/TheLogo';

const StyledTheHeader = styled.header`
  padding: 20px 0;

  .header__inner {
    display: flex;
    align-items: center;
  }
`;

const TheHeader = () => {
  return (
    <StyledTheHeader>
      <Container>
        <div className="header__inner">
          <Logo></Logo>
        </div>
      </Container>
    </StyledTheHeader>
  );
};

export default TheHeader;