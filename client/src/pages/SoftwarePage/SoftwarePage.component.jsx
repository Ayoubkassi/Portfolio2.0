import React from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import Connect from '../../components/Connect/Connect.component';
import Footer from '../../components/Footer/Footer.component';
import { Main } from './SoftwarePage.styles';
import Repo from '../../components/Repo/Repo.component';
import Techno from '../../components/Techno/Techno.component';

const SoftwarePage = () => {
  return (
    <Main>
      <Navbar background="white" color="black"/>
      <Repo />
      <Techno />
      <Connect />
      <Footer />
    </Main>
  )
}

export default SoftwarePage;
