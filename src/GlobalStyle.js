import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    background: linear-gradient(90deg, rgba(300,100,100,120) 0%, rgba(100,101,220,300) 100%);
  }`