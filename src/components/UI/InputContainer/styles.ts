import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledInputContainer = styled.div`
  position: relative;
  &:not(:last-child) {
    margin: 0 0 15px;
  }

  input {
    border: 2px solid ${theme.colors.border};
    border-radius: 10px;
    padding: 14px 20px;
    color: ${theme.colors.secondary};
    transition: 0.3s;
    outline: none;

    &:focus {
      border: 2px solid ${theme.colors.secondary};
    }
  }
`;

export const StyledSpan = styled.span`
  color: #3a86ff;
  font-size: 14px;
  user-select: none;
`;