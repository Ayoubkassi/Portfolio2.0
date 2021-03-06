import React , {useState} from 'react'
import { Title , Main , Container , Btn } from './Login.styles';
import { useHistory } from 'react-router-dom';
import { firebase } from '../../firebase/firebase';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
//import { Redirect } from 'react-router-dom';


const Login = ({user, setCurrentUser}) => {
  const history = useHistory();
  const [username , setUsername ] = useState('');
  const [password , setPassword ] = useState('');
  const [error , setError ] = useState('');
  console.log(user);
  const isInvalid = username === '' || password === '';

  function redirectClick(){
    setError('');
    history.push("/login");
  }


  const handleSingIn = (e)=>{
      e.preventDefault();
      console.log(`Username : ${username} and passowrd : ${password}`);

      firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Signed in
        history.push('/dashboard');
        let currentUser = {
          email : username ,
          password : password
        }
        setCurrentUser(currentUser);
        // ...
      })
      .catch((error) => {

        setError('Failed to log in as Ayoubkassi');
        setUsername('');
        setPassword('');
        //setError(errorMessage);
      });

    /*  axios.post('/api/login', {
    email: username,
    password: password
  })
  .then(function (response) {
    console.log(response);
    if(response.status === 200){
      //setCurrentUser(response.data.data);
      let currentUser = response.data.data;
      setCurrentUser(currentUser);
      history.push('/dashboard');
    }

  })
  .catch(err => {
    setError('Failed to log in as Ayoubkassi');
  });*/

  }

  return (
    <Main>
      <Container>
      { error ?
          <>
            <h4 style={{textAlign : 'center' , paddingTop : '10vw'}}>{error}</h4>
            <Btn style={{marginTop : '8px'}} onClick={redirectClick}>Rerty</Btn>
          </>
         :
        <>
        <Title>Login</Title>
        <form autoComplete="off" onSubmit={handleSingIn}>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="name">Username</label>
            <input type="text" value={username} onChange={({target}) => setUsername(target.value)} required className="form-control" placeholder="Enter Username" autoComplete="off" />
            </div>
            <label htmlFor="Password">Password</label>
          <input type="password" value={password} onChange={({target}) => setPassword(target.value)} required className="form-control" placeholder="Enter Password" />
          </div>
          <Btn disabled={isInvalid} type="submit">Submit</Btn>
        </form>
        </>
      }
      </Container>
    </Main>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({
  user : state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
