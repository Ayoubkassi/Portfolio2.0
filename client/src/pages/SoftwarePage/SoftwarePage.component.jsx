import React , { useEffect , useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import Connect from '../../components/Connect/Connect.component';
import Footer from '../../components/Footer/Footer.component';
import { Main } from './SoftwarePage.styles';
import Repo from '../../components/Repo/Repo.component';
import Techno from '../../components/Techno/Techno.component';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProjects } from '../../redux/project/project.action';
import  WithSpinner  from '../../components/with-spinner/with-spinner.component';
import { firebase } from '../../firebase/firebase';


const RepowWithSpinner = WithSpinner(Repo);


const SoftwarePage = ({updateProjects}) => {

  const [loading , setLoading ] = useState(true);

  //const [projects , setProjects] = useState([]);
  let config = {
  headers: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzI0NTEwN2VlMTI4NzEyZTcwMzFjNmZmMzk0OWExMmVkNGNjMDg5NTRkMDUzZmM5OGFmM2YwOTAyMTAwNGRjNmJiZjBkMzEyMTBjNGVjZmUiLCJpYXQiOjE2Mjk5Nzc4MDAuMDE3MzU0LCJuYmYiOjE2Mjk5Nzc4MDAuMDE3MzU3LCJleHAiOjE2NjE1MTM3OTkuODk3Njg1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.LqAMhNps8Cl86H3JD3O56zgT89xmwzHeaGTsboGVbTDyrTFKfznKeuk2H--YyANTtKswru5Cud6giDtRR8bNfjIfcZOi83Lu5isutUPw9A-X5YLkw2uh2reLGoWaJLkgMC3aoFDHOywcE14R0C0cIWbfxNYZtVlF7TnPW9iR239VF7DdGwhFbSF1Tb4lQd5sW-iNnHjnbZKyCJjAqMsExVsFi3l37VlTUomowp-E1vbBj-5YQFCCU5iw8wVz0up0eELbUrmMFWpEwpf2MWdUjeHNMLvrNWuJLlkgZjMtVTE21h_2ortAgXU9Ye6eijUMWO2Rv0cU8fZpLHKfOxvB9VKF9NZKjoDOazobkSNN1uUC90V9uCWmkd61DiyrrmNSZAKT4Tjv1lx55qc1dBQY1NvtjUkSt3YeROLw3A6Ul5Ztz7dv3tJoFEfkGpRPCbkQ_u2nexc-bdlTdcIb20ADCFjySPXvlPYmnCK0KqPXPIByUdytscLFEh7LoQC9fGAZLdVJu2oOGa2Yldl90ZEQzcIwOCYoT1Dtm8MrspzJpC3nzjlOqYKP45YT5-7UtTYJlzBRFqQGDrLBpwBNcL0chFJhLUYPtMp9VRK8jDW8d6zuHw841W-fbEUQfgfaqHuKQPwry3ikxmcUa1X8fb3vac9na6GuPPC0M4w00dNkH4M",
    Accept : "Application/json"
  }
}

// useEffect(()=>{
//   axios.get('/api/projects',config).then(res => {
//     updateProjects(res.data.data);
//     setLoading(false);
//
//
//   })
//                           .catch(err => console.log(err));
// },[]);

let projects = [];
useEffect(()=>{
  let q = firebase.firestore().collection('projects').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
      let currentProject = doc.data().project;
    projects.push( currentProject );
    });
    updateProjects(projects);
    setLoading(false);

  });

/*
  Add our project into the firestore
projects.map((project) =>(
      firebase.firestore().collection('projects').add({
          project : project
      })

  ));*/
},[]);






  return (
    <Main>
      <Navbar background="white" color="black"/>
      <RepowWithSpinner isLoading={loading} />
      <Techno />
      <Connect />
      <Footer />
    </Main>
  )
}

const mapDispatchToProps = dispatch => ({
  updateProjects : projects => dispatch(updateProjects(projects))
});


export default  connect(null , mapDispatchToProps)(SoftwarePage);
