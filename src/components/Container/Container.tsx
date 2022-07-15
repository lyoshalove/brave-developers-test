import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

interface IProps {
  children: React.ReactNode
}

export const Container: React.FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};