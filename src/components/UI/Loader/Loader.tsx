import React from 'react';
import { StyledLoader } from './styles';

export const Loader: React.FC = () => {
  return (
    <StyledLoader viewBox="0 0 100 100">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" color="#fc6767" />
        </filter>
      </defs>
      <circle id="spinner" cx="50" cy="50" r="45" />
    </StyledLoader>
  );
};