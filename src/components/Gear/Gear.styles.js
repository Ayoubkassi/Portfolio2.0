import styled from 'styled-components';

export const Main = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  color : #212529;
  width : 81.6vw;
  margin : 0 auto;
`

export const Title = styled.h3`
  padding-bottom : 20px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.1;
`
export const Description = styled.p`
margin-bottom:1rem;
padding-top: 20px;
font-size: 1rem;
font-weight: 500;
line-height: 1.5;
color: #212529;
`

export const Features = styled.div`
  display : grid;
  grid-template-columns : repeat(3,1fr);
  grid-gap : 30px;
  margin-top : 40px;
`
