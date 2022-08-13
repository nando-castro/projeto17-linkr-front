import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
  }
  body{
    width: 100vw;
    height: 100%;
    background: #333333;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
