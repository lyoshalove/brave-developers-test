import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledLogo = styled.a`
  color: ${theme.colors.secondary};
  font-size: 34px;
  font-weight: bold;
  margin: 0 35px 0 0;
  cursor: pointer;
  @media ${theme.media.medium} {
    font-size: 24px;
  }
  @media ${theme.media.small} {
    font-size: 20px;
  }
`;