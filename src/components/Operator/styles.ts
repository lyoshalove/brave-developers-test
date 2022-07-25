import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledOperator = styled.a`
  flex: 0 1 calc(33.3% - 10px);
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  background: none;
  transition: 0.3s;
  cursor: pointer;
  max-width: calc(33.3% - 10px);
  &:hover {
    border: 2px solid ${theme.colors.secondary};
  }
  @media ${theme.media.medium} {
    flex: 0 1 calc(50% - 7.5px);
    max-width: calc(50% - 7.5px);
  }
  @media ${theme.media.small} {
    width: 75%;
    max-width: 75%;
  }

  svg {
    width: 150px;
    height: 30px;
  }
`;