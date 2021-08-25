import React from 'react';
import  { Main , Item } from './Footer.styles';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <Main>
      <Item to="/">Home</Item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <Item to="/software">Software</Item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <Item to="/gear">Gear</Item>
      <Link to="/login" style={{color : "#3d3d3d", textDecoration: "none" , cursor: "auto"}}>|</Link>
      <Item to="/contact">Contact</Item>
    </Main>
  )
}

export default Footer;
