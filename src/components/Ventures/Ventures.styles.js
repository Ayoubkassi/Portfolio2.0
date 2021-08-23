import styled from 'styled-components';

export const Main = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 55px;
  padding-left: 55px;
  color : #191919!important;
`

export const Title = styled.h3`
  padding-bottom : 20px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: .5rem;
`

export const List = styled.ul`
  display : flex;
  flex-direction : column;
  margin-bottom: 1rem;
  margin-left : 45px;
`
export const Item = styled.li`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #191919;
`

export const Motivation = styled.p`
  color : #191919;
  margin-top: 35px;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.5;
  font-size : 1rem;
`

export const Info = styled.div`
  width : 40vw;
  display : flex;
  justify-content : space-between;
  align-items : center;
  margin : 90px auto;
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
  &:hover{
    background-color: #23272b;
    border-color: #1d2124;
    transition: all .15s ease-in-out;

  }
`
