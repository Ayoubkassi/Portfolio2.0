import React from 'react'
import { Title , Main , Container , Btn } from './Login.styles';

const Login = (props) => {
  return (
    <Main>
      <Container>
        <Title>Login</Title>
        <form autocomplete="off">
          <div class="form-group">
            <div class="form-group">
              <label htmlFor="name">Username</label>
            <input type="text" required className="form-control" placeholder="Enter Username" autocomplete="off" />
            </div>
            <label htmlFor="Password">Password</label>
          <input type="password" required className="form-control" placeholder="Enter Password" />
          </div>
          <Btn type="submit">Submit</Btn>
        </form>
      </Container>
    </Main>
  )
}

export default Login;
