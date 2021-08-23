import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  text-align : start;

`
export const Container = styled.div`
  width : 40vw;
  margin : 0 auto;
`

export const Title = styled.h4`
  padding-bottom: 10px;
  font-size: 1.25rem;
  color : #212529;
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
`

export const Info = styled.div`
  display : flex;
  justify-content : space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
`
