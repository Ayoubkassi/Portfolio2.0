import React from 'react';
import  { Main , Item } from './Footer.styles';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <Main>
      <item>Home</item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <item>Software</item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <item>Gear</item>
      <Link to="/login" style={{color : "#3d3d3d", textDecoration: "none" , cursor: "auto"}}>|</Link>
      <item>Contact</item>
    </Main>
  )
}

export default Footer;
