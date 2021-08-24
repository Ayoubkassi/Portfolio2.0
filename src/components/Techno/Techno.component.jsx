import React from 'react'
import { Title , Main , Container , Features } from './Techno.styles';
import data from  '../../data.json';
import  Feature from '../Feature/Feature.component';

const Techno = () => {
  return (
    <Main>
      <Container>
        <Title>TECHNOLOGY STACK</Title>
        <p style={{fontSize : '14px', marginTop : '-16px'}}>MY WEBSITE ARCHITECTURE</p>
        <Features>
          { data.techs.map((item)=>(
              <Feature color="white" item={item} />
          )) }
        </Features>
        <h2 style={{fontSize : '24px' , marginBottom: '20px'}}>Services</h2>
        <table className="table" style={{ paddingBottom: "100px",paddingTop: "60px", marginBottom: "50px"}}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Endpoint</th>
              <th scope="col">Language</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jwtidentity</td>
              <td>ayoubkassi.cf/api/auth</td>
              <td>Dotnet</td>
              <td>JWT Authentication Server used to secure all other services (hangfire, mailer)</td>
            </tr>
            <tr>
              <td>hangfire</td>
              <td>ayoubkassi.cf/api/hangfire</td>
              <td>Dotnet</td>
              <td>Background processing server</td>
            </tr>
            <tr>
              <td>mailer</td>
              <td>ayoubkassi.cf/api/mailer</td>
              <td>Dotnet</td>
              <td>Mailing service secured by JWT</td>
            </tr>
            <tr>
              <td>mysql</td>
              <td>private. only accessible within cluster</td>
              <td>MySql</td>
              <td>Database for jwtidentity, hangfire, hangfire_github, hangfire_youtube</td>
            </tr>
            <tr>
              <td>redir</td>
              <td>ayoubkassi.io/redir</td>
              <td>Node js	</td>
              <td>Redirect amazon affiliate links based on country</td>
            </tr>
            <tr>
              <td>front</td>
              <td>ayoubkassi.cf</td>
              <td>Next js + React</td>
              <td>What you see</td>
            </tr>
          </tbody>

        </table>
      </Container>
    </Main>
  )
}

export default Techno;
