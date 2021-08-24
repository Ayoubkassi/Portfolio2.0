import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.component';
import Connect from '../../components/Connect/Connect.component';
import Footer from '../../components/Footer/Footer.component';
import { Main } from './Gear.styles';
import Gear from '../../components/Gear/Gear.component';

const GearPage = () => {
  return (
    <Main>
      <Navbar background="white" color="black"/>
      <Gear />
      <Connect />
      <Footer />
    </Main>
  )
}

export default GearPage;
