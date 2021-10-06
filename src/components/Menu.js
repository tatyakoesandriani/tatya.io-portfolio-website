import React from "react";
import { bool } from "prop-types";
import styled from "@emotion/styled";

export const StyledMenu = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  opacity: 90%;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 920px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 920px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;

const Menu = ({ open }) => {
  return !open ? null : (
    <StyledMenu open={open}>
      <a href="/">
        About
      </a>
      <a href="/">
        Works
      </a>
      <a href="/">
        Resume
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
