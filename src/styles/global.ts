import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', Times, serif;
  }

  body {
    background: #000000;
    color: ${props => props.theme.colors.baseText};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {

    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
