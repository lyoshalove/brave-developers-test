import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyles";
import TheHeader from "../components/TheHeader/TheHeader";
import TheFooter from "../components/TheFooter/TheFooter";
import styled from "styled-components";
import Head from "next/head";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledWrapper>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <TheHeader />
      <Component {...pageProps} />
      <TheFooter />
    </StyledWrapper>
  );
}

export default MyApp;
