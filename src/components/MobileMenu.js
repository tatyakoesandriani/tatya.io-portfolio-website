import React from "react";
import { bool, func } from "prop-types";
import styled from "@emotion/styled";

import Burger from './Burger';

const StyledMobileMenu = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  opacity: 90%;
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 920px) {
    width: 100%;
  }

  a {
    font-family: Rubik, sans-serif, serif;
    padding: 2rem 0;
    font-weight: bold;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 920px) {
      font-size: 3rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;

const MobileMenu = ({ open, setOpen }) => {
  return !open ? null : (
    <div>
    <Burger open={open} setOpen={setOpen} />
    <StyledMobileMenu open={open}>
      <a href="/about">
        About
      </a>
      <a href="/works">
        Works
      </a>
      <a href="/resume">
        Resume
      </a>
    </StyledMobileMenu>
    </div>
  );
};

MobileMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MobileMenu;
