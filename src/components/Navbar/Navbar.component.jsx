import React from 'react';
import { Nav , Logo , Features , Left , Right , Item } from './Navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Ayoub Kassi</Logo>
      <Features>
        <Left>
          <Item to="/software">Software</Item>
          <Item>Gear</Item>
        </Left>
        <Right>
          <Item to="/contact">Contact</Item>
        </Right>
      </Features>
    </Nav>
  )
}

export default Navbar;
