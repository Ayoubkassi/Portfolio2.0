import styled from 'styled-components';
import back from '../../assets/back.jpg';
import { Link } from 'react-scroll';


export const Main = styled.div`
  height :100vh;
  background :url(${back});
  background-repeat : no-repeat;
  background-position:center;
  background-size : cover;
  max-width : 100vw;
  color : white;
`

export const Down = styled.div`
position : absolute;
bottom : 2%;
left: 50%;
transform : translate(-50%,-10%);

@media screen and (max-width : 550px){
  bottom : -2%;
}
`

export const More = styled(Link)`
  text-decoration : none;
  color : white;
  font-size : 26px;
  font-weight : 500;
  cursor : pointer;
`
export const Social = styled.div`
  position : absolute;
  left : 1%;
  top : 63%;
  transform : translate(-5%,-50%);
  max-width : 3vw;

`
