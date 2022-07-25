import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledButton = styled.button`
  background: ${theme.colors.secondary};
  padding: 10px 18px;
  border-radius: 8px;
  border: 2px solid ${theme.colors.secondary};
  transition: 0.3s;
  font-weight: bold;
  min-width: 120px;
  color: ${theme.colors.white};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
    #spinner {
      stroke: ${theme.colors.secondary};
    }
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;