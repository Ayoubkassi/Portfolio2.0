import React from 'react'
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
import axios from 'axios';

const HomePage = () => {
  let config = {
  headers: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzI0NTEwN2VlMTI4NzEyZTcwMzFjNmZmMzk0OWExMmVkNGNjMDg5NTRkMDUzZmM5OGFmM2YwOTAyMTAwNGRjNmJiZjBkMzEyMTBjNGVjZmUiLCJpYXQiOjE2Mjk5Nzc4MDAuMDE3MzU0LCJuYmYiOjE2Mjk5Nzc4MDAuMDE3MzU3LCJleHAiOjE2NjE1MTM3OTkuODk3Njg1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.LqAMhNps8Cl86H3JD3O56zgT89xmwzHeaGTsboGVbTDyrTFKfznKeuk2H--YyANTtKswru5Cud6giDtRR8bNfjIfcZOi83Lu5isutUPw9A-X5YLkw2uh2reLGoWaJLkgMC3aoFDHOywcE14R0C0cIWbfxNYZtVlF7TnPW9iR239VF7DdGwhFbSF1Tb4lQd5sW-iNnHjnbZKyCJjAqMsExVsFi3l37VlTUomowp-E1vbBj-5YQFCCU5iw8wVz0up0eELbUrmMFWpEwpf2MWdUjeHNMLvrNWuJLlkgZjMtVTE21h_2ortAgXU9Ye6eijUMWO2Rv0cU8fZpLHKfOxvB9VKF9NZKjoDOazobkSNN1uUC90V9uCWmkd61DiyrrmNSZAKT4Tjv1lx55qc1dBQY1NvtjUkSt3YeROLw3A6Ul5Ztz7dv3tJoFEfkGpRPCbkQ_u2nexc-bdlTdcIb20ADCFjySPXvlPYmnCK0KqPXPIByUdytscLFEh7LoQC9fGAZLdVJu2oOGa2Yldl90ZEQzcIwOCYoT1Dtm8MrspzJpC3nzjlOqYKP45YT5-7UtTYJlzBRFqQGDrLBpwBNcL0chFJhLUYPtMp9VRK8jDW8d6zuHw841W-fbEUQfgfaqHuKQPwry3ikxmcUa1X8fb3vac9na6GuPPC0M4w00dNkH4M",
    Accept : "Application/json"
  }
}

  axios.get('/api/projects',config).then(res => console.log(res.data.data))
                          .catch(err => console.log(err));
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
