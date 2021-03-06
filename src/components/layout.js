/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Header from "./header";
import { theme } from "./styles/theme";
import { globalCSS } from "./styles/globalCSS";

const GlobalStyles = createGlobalStyle`
  ${globalCSS}
`;

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Header pageLink={props.pageLink} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by Blake Hartman
        </footer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
