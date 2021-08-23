import styled from 'styled-components';

export const Main = styled.div`
  background : #191919;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-right: 55px;
  padding-left: 55px;
  color : white;
`

export const Title = styled.p`
  letter-spacing : 10px;
  padding-bottom : 60px;
  font-size: 2rem;
`

export const Description = styled.p`
padding-bottom: 60px;
padding-top: 20px;
font-size: 1.1em;
letter-spacing: 1px;
margin: 0px;
font-weight: 400;
line-height: 1.5;
`

export const Features = styled.div`
  display : grid;
  grid-template-columns : repeat(4,1fr);
  grid-gap : 30px;
`
