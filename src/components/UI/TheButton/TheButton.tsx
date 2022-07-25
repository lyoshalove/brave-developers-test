import React from 'react';
import { StyledButton } from './styles';

interface IProps {
  disabled?: boolean;
  children: React.ReactNode;
  center?: boolean;
  onClick?: () => void;
}

export const TheButton: React.FC<IProps> = ({ children, center, ...props }) => {
  const styles = center ? { margin: "0 auto", display: "block" } : {};

  return (
    <StyledButton {...props} style={styles} className="center">
      {children}
    </StyledButton>
  );
};