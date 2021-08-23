import React from 'react';
import  { Main , Item } from './Footer.styles';



const Footer = () => {
  return (
    <Main>
      <item>Home</item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <item>Software</item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <item>Gear</item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <item>Contact</item>
    </Main>
  )
}

export default Footer;
