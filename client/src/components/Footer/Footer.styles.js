import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  background-color: #191919;
  padding: 30px 120px;
  font-weight: 400;
  line-height: 1.5;
  display : grid;
  grid-template-columns : repeat(7,1fr);
  grid-gap:5px;
  color : white;
  @media screen and (max-width : 550px){
    padding : 30px;

  }
`

export const Item = styled(Link)`
  text-decoration : none;
  color : white;
  cursor : pointer;
  &:hover{
    text-decoration: underline;
    color : white;
  }
`
