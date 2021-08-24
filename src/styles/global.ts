import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body,
  #root {
    font-family: raleway,sans-serif;
    background-color: #262626;
    color: #FFF;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1s ease-in;
  }

  .fade-exit {
    opacity: 1;
    z-index: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 2s ease-out;
  }
`;
