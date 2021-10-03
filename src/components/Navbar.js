import *  as React from 'react';
import styled from "@emotion/styled"

const Nav = styled.nav`
  margin: 28px auto;
  color: #f1f1f1;
  font-size: 20px;
  font-weight: 500;
  font-family: Rubik, sans-serif, serif;
  padding: 0 120px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
}
`

const ListWrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  padding-inline-start: 0;
  margin-block-start: 0;
`

const NavbarItem = styled.li`
  margin: 0 0 0 40px;
  padding: 12px 20px;
`

const NavIcon = styled.li`
  flex: 1;
`
const NavIcon2 = styled.span`
  color: #a9a9a9;
`
const Navbar = () => {
  
  return (
    <Nav>
      <ListWrapper>
        <NavIcon>Tatya Koesandriani — <br></br><NavIcon2>Experience Designer</NavIcon2></NavIcon>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Works</NavbarItem>
        <NavbarItem>Resume</NavbarItem>
      </ListWrapper>
    </Nav>
  )
}

export default Navbar;