import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #3a86ff;
  padding: 10px 18px;
  border-radius: 8px;
  border: 2px solid #3a86ff;
  transition: 0.3s;
  font-weight: bold;
  min-width: 120px;
  &:hover {
    background: #fff;
    color: #3a86ff;
    #spinner {
      stroke: #3a86ff;
    }
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

interface IProps {
  disabled?: boolean;
  children: React.ReactNode;
  center?: boolean;
  onClick?: () => void;
}

const TheButton = ({ children, center, ...props }: IProps) => {
  const styles = center ? {margin: '0 auto', display: 'block'} : {};

  return <StyledButton {...props} style={styles} className="center">{children}</StyledButton>;
};

export default TheButton;