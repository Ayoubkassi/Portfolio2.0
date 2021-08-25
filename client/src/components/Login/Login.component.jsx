import React , {useState} from 'react'
import { Title , Main , Container , Btn } from './Login.styles';
import { useHistory } from 'react-router-dom';
import { firebase } from '../../firebase/firebase';

const Login = (props) => {
  const history = useHistory();
  const [username , setUsername ] = useState('');
  const [password , setPassword ] = useState('');
  //const [error , setError ] = useState('');

  const isInvalid = username === '' || password === '';

  const handleSingIn = (e)=>{
      e.preventDefault();
      console.log(`Username : ${username} and passowrd : ${password}`);

      firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Signed in
        history.push('/');
        // ...
      })
      .catch((error) => {

        let errorMessage = error.message;
        console.log(errorMessage);
        setUsername('');
        setPassword('');
        //setError(errorMessage);
      });
  }

  return (
    <Main>
      <Container>
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
      </Container>
    </Main>
  )
}

export default Login;
