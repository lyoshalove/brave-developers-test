import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    color: #fff;
    font-size: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  .center {
    text-align: center;
  }
`;