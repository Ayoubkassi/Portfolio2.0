import React  from 'react'
import Navbar from '../../components/Navbar/Navbar.component';
import Landing from '../../components/Landing/Landing.component';
import { Main , More , Down , Social } from './HomePage.styles';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Work from '../../components/Work/Work.component';
import Projects  from '../../components/Projects/Projects.component';
import Ventures from '../../components/Ventures/Ventures.component';
import Connect from '../../components/Connect/Connect.component';
import Footer from '../../components/Footer/Footer.component';
import Media from '../../components/Social/Social.component';

const HomePage = () => {

  return (
    <>
    <Main>
      <Navbar background="transparent" color="white"/>
      <Landing />
      <Social>
        <Media flexDirection="column" size="medium"/>
      </Social>
      <Down>
        <More
              to="work"
              activeClass="active"
              spy={true}
              smooth={true}>Read More<br/></More>
        <ExpandMoreRoundedIcon style={{marginLeft : '35px', fontSize: 60 }} />
      </Down>
    </Main>
    <Work />
    <Projects />
    <Ventures />
    <Connect />
    <Footer />
    </>
  )
}




export default HomePage;
