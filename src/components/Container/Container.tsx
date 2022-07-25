import React from 'react';
import { StyledContainer } from './styles';

interface IProps {
  children: React.ReactNode
}

export const Container: React.FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};