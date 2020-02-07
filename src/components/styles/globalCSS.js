import { css } from 'styled-components';

export const globalCSS = css`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap');
  
  @font-face {
    font-family: "Circular";
    src: url("../fonts/CircularStd-Bold.woff2") format("woff2"), url("../fonts/CircularStd-Bold.woff") format("woff");
  }

  html {
    font-size: 10px;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.header};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.header};
  }
`;