import type { AppProps } from "next/app";
import {GlobalStyle} from "../styles/GlobalStyles";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/TheFooter";
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

export function setOperators(newOperator: IOperator) {
  if (
    !operators.find(
      (operator) =>
        operator.name.toLowerCase() === newOperator.name.toLowerCase()
    )
  ) {
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
      <Header />
      <OperatorsContext.Provider value={operators}>
        <Component {...pageProps} />
      </OperatorsContext.Provider>
      <Footer />
    </StyledWrapper>
  );
}

export default MyApp;
