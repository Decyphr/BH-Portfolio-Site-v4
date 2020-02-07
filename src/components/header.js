import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { theme } from "./styles/theme";
import { Capitalize } from "../utils/capitalize";

function Header({ pageLink }) {
  return (
    <NavBar>
      <Container>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: theme.colors.black,
              textDecoration: `none`,
            }}
          >
            B|H
        </Link>
        </h1>
        <h2 style={{ fontSize: `2rem` }}>
          <Link
            to={`/${pageLink}`}
            style={{
              color: theme.colors.black,
              textDecoration: `none`,
            }}
          >
            {pageLink === `contact` ? `Let's Talk.` : Capitalize(pageLink)}
          </Link>
        </h2>
      </Container>
    </NavBar>
  );
};

const NavBar = styled.header`
  background: white;
  padding: 55px 100px;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Header.propTypes = {
  pageLink: PropTypes.string,
};

Header.defaultProps = {
  pageLink: `contact`,
};

export default Header;
