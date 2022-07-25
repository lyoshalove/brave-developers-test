import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledTheHeader = styled.header`
  padding: 20px 0;
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled.button`
  color: ${theme.colors.secondary};
  font-weight: bold;
  border: none;
  background: none;
`;