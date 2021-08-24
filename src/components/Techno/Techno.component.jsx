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
      </Container>
    </Main>
  )
}

export default Techno;
