import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  text-align : start;
  color : white;
  background :#191919 ;
  padding-top: 70px;
padding-bottom: 70px;
`
export const Container = styled.div`
  width : 83vw;
  margin : 0 auto;
`
export const Title = styled.h2`
  font-size: 1.75rem;
  padding-bottom: 20px;
  font-weight: 500;
line-height: 1.1;
letter-spacing: 10px;
`

export const Features = styled.div`
  display : grid;
  grid-template-columns : repeat(6,1fr);
  grid-gap : 30px;
  padding-top : 60px;
  padding-bottom: 30px;
`
