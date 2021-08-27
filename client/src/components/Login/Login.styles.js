import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  text-align : start;
  color : #212529;
  height : 84vh;
`
export const Container = styled.div`
  width : 40vw;
  margin : 0 auto;
  margin-top : -10vw;

  @media screen and (max-width : 800px){
    width : 90vw;
  }


`
export const Title = styled.h3`
  font-size: 1.25rem;
  color : #212529;
  padding-bottom: 20px;
`

export const Btn = styled.button`
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .5rem .75rem;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: .25rem;
  transition: all .15s ease-in-out;
  margin-left : 40%;
  margin-bottom : 30px;
  &:hover{
    background-color: #23272b;
    border-color: #1d2124;
    transition: all .15s ease-in-out;

  }

  &:disabled{
    opacity : 0.5;
  }
`
