import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display : flex;
  z-index : 1000;
  justifu-content : space-between;
  background-color : ${({ background }) => (background === 'white' ? 'white' : 'transparent')};
  max-width : 100vw;
  height : 120px;
  padding: 50px;
  align-items : center;

  @media screen and (max-width : 427px){
    display : none;
    justifu-content : flex-start;
  }

`

export const Logo = styled(Link)`
  flex-basis : 12vw;
  margin-left : 4vw;
  text-decoration: none;
  color : ${({color}) => (color === 'black' ? 'black' : 'white')};
  font-size : 18px;
  padding: 11px;
  &:hover{
    color : ${({color}) => (color === 'black' ? 'black' : 'white')};
    text-decoration : none;
  }

  @media screen and (max-width : 427px){

    margin-left : 0;
    flex-basis : 7vw;
  }
`

export const Features = styled.div`
  display : flex;
  justifu-content : space-between;
  flex-basis:88vw;
`
export const Left = styled.div`
  flex-basis:80vw;
`

export const Right = styled.div`
  flex-basis:20vw;
`

export const Item = styled(Link)`
  text-decoration : none;
  color : ${({color}) => (color === 'black' ? 'black' : 'white')};
  padding: 11px;
  margin-left : 8px;
  font-size : 18px;
  &:hover{
    background-color : rgba(255,255,255,0.2);
    transition : all 0.8s ease-out;
    color : ${({color}) => (color === 'black' ? 'black' : 'white')};
    text-decoration : none;
  }
`
