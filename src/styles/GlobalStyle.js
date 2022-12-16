import { css, createGlobalStyle } from "styled-components";

export const colors = {
  obscure: "#1b1b25",
  darkBlue: "#1c3643",
  lightBlue: "#33b1ff",
  lightGreen: "#95ca3e",
  green: "#85c638",
  darkGreen: "#58902d",
  danger: "#ff463b",
  yellow: "#fcc000",
  white: "#fff",
  meta: "#0f1840",
  pink: "#FF2D55",
};

export const size = {
  small: 320,
  mediu: 411,
  medium: 425,
  mediumL: 768,
  large: 1024,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  ul, li, h1, h2, h2, h3, button {
    margin: 0;
    padding: 0;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

.logo {
  height: 35px;
  width: auto;
}

  ${
    "" /* body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  } */
  }

  body {
    background: yellow;
    height: 100vh;
    margin: 0 auto;
  
   ${"" /*  max-width: 500px;  */}
    overscroll-behavior: none;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  #app {
    max-width: 1400px;
  }
`;
