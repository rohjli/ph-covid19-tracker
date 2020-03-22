import styled, { createGlobalStyle } from "styled-components";

export const MEDIA = {
  mobile: "@media screen and (max-width: 500px)"
};

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: #252C45;
    color: #D9EEFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;

  ${MEDIA.mobile} {
    flex-direction: column;
  }
`;
