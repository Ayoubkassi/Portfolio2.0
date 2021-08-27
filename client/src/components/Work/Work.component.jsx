import React from 'react';
import { Main , Title , Description , Features} from './Work.styles';
import data from  '../../data.json';
import  Feature from '../Feature/Feature.component';

const Work = () => {

  return (
    <div id="work">
    <Main>
      <Title>MY WORK</Title>
      <Description>I was never the best at school or academics, I’m just a super curious guy. My channel exists to share these ideas and theories that interest me. I spend a lot of time building software and electronics, but there’s also a lot more to it. I’ve been working on a video format to document the logic, reasoning, and problems encountered during the process of learning engineering. A combination of innovation and storytelling.</Description>
      <Features>
        { data.works.map((item, index)=>(
            <Feature color="white" item={item} key={index} />
        )) }
      </Features>
    </Main>
    </div>
  )
}

export default Work;
