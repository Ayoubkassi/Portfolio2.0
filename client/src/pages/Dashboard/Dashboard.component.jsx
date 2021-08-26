import React from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import Connect from '../../components/Connect/Connect.component';
import Footer from '../../components/Footer/Footer.component';
import { Main } from './Dashboard.styles';


const Dashboard = () => {
  return (
    <Main>
      <Navbar background="white" color="black"/>

    <h2 style={{textAlign : 'center' , color : 'black', padding : '40px 0'}}>  This is Dashboard </h2>
      <Connect />
      <Footer />
    </Main>
  )
}




export default Dashboard;
