import styled from 'styled-components';
import back from '../../assets/back.jpg';
import { Link } from 'react-router-dom';


export const Main = styled.div`
  height :100vh;
  background :url(${back});
  background-repeat : no-repeat;
  background-position:center;
  background-size : cover;
  max-width : 100vw;
`

export const Down = styled.div`
position : absolute;
bottom : 2%;
left: 50%;
transform : translate(-50%,-10%);
`

export const More = styled(Link)`
  text-decoration : none;
  color : white;
  font-size : 26px;
  font-weight : 500;
`
