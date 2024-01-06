import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  
  a{
    text-decoration: none;
  }
  
  ul{
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: unset;
    color: #018C0F;
  }
`