import type { AppProps } from "next/app";
import {GlobalStyle} from "../styles/GlobalStyles";
import {TheHeader} from "../components/TheHeader/TheHeader";
import {TheFooter} from "../components/TheFooter/TheFooter";
import styled from "styled-components";
import Head from "next/head";
import { operators } from "../constants/operators";
import React, { useContext } from "react";
import { IOperator } from "../types/OperatorType";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface IOperatorsContext extends IOperator {
  setOperators: (newOperator: IOperator) => void;
}

export function setOperators(newOperator: IOperator) {
  if(!operators.find(operator => operator.name === newOperator.name)) {
    operators.push(newOperator);
  }
}

export const OperatorsContext = React.createContext(operators);
export const useGlobalContext = () => useContext(OperatorsContext);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledWrapper>
      <Head>
        <title>Home</title>
      </Head>
      <GlobalStyle />
      <TheHeader />
      <OperatorsContext.Provider value={operators}>
        <Component {...pageProps} />
      </OperatorsContext.Provider>
      <TheFooter />
    </StyledWrapper>
  );
}

export default MyApp;
