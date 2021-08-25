import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  text-align : start;
  color : #212529;
`
export const Container = styled.div`
  width : 83vw;
  margin : 0 auto;

  @media screen and (max-width : 600px){
    padding-top : 10vw;
  }
`
export const Title = styled.h3`
  font-size: 1.75rem;
  color : #212529;
  padding-bottom: 20px;
`
