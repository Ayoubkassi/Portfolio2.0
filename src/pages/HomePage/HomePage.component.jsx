import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.component';
import Landing from '../../components/Landing/Landing.component';
import { Main , More , Down } from './HomePage.styles';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Work from '../../components/Work/Work.component';


const HomePage = () => {
  return (
    <>
    <Main>
      <Navbar />
      <Landing />
      <Down>
        <More>Read More<br/></More>
        <ExpandMoreRoundedIcon style={{marginLeft : '35px', fontSize: 60 }} />
      </Down>
    </Main>
    <Work />
    </>
  )
}

export default HomePage;
