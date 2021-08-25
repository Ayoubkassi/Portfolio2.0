import React from 'react';
import { Nav , Logo , Features , Left , Right , Item } from './Navbar.styles';

const Navbar = ({background = "transparent", color= "white"}) => {
  return (
    <Nav background={background}>
      <Logo color={color} to="/">Ayoub Kassi</Logo>
      <Features>
        <Left>
          <Item to="/software" color={color}>Software</Item>
          <Item to="/gear" color={color}>Gear</Item>
        </Left>
        <Right>
          <Item to="/contact" color={color}>Contact</Item>
        </Right>
      </Features>
    </Nav>
  )
}

export default Navbar;
