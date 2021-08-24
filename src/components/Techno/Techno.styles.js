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
max-width : 100vw;
overflow : hidden;
`
export const Container = styled.div`
  width : 83vw;
  margin : 0 auto;
  @media screen and (max-width : 950px){
    width : 94vw;

  }
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
  padding-bottom: 80px;

  @media screen and (max-width : 950px){
    grid-template-columns : repeat(3,1fr);

  }

  @media screen and (max-width : 700px){
    grid-template-columns : repeat(2,1fr);

  }

  @media screen and (max-width : 550px){
    grid-template-columns : repeat(1,1fr);

  }
`
