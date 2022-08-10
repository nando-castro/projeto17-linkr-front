import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100%;
    background: #333333;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;