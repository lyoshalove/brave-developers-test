import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledModal = styled.div`
  min-height: 100vh;
  background: rgba(${theme.colors.primaryRGBA}, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 15px;
`;

export const StyledModalInner = styled.div`
  background: ${theme.colors.white};
  padding: 20px 30px;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  text-align-center;
`;

export const StyledTitle = styled.h2`
  text-align: center;
`;

export const StyledDescription = styled.p`
  margin: 10px 0 15px;
  text-align: center;
`;