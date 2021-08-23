import React from 'react'
import { Main , Title , Item , List , Motivation , Info , Btn} from './Ventures.styles';

const Ventures = () => {
  return (
    <Main>
      <Title>Future Ventures (Teach myself in 2021)</Title>
      <List>
        <Item>Scalable distributed systems (infrastructure, networks, microservices)</Item>
        <Item>Machine Learning/AI</Item>
        <Item>Image/Video processing</Item>
        <Item>Security</Item>
        <Item>File servers / personal datacenter / NAS</Item>
        <Item>Blockchain</Item>
        <Item>Embedded Systems (more IoT)</Item>
        <Item>Electrical engineering</Item>
        <Item>Toasting bread instantly</Item>
      </List>
      <Motivation>I have many interests besides technology that I may share in a similar approach. You can read more about my technology stack on the software page.</Motivation>
      <Info>
        <Btn>Software</Btn>
        <Btn>Contact Me</Btn>
      </Info>
    </Main>
  )
}

export default Ventures;
