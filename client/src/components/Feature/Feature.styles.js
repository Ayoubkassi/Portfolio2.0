import styled from 'styled-components';

export const Section = styled.div`
  display : flex;
  flex-direction : column;
  color : ${({color})=> (color === "black" ? "black" : "white")};
`

export const Title = styled.h5`
  font-size: 1.25rem;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.1;

`

export const List = styled.ul`
  margin-left : 27px;
`

export const Item = styled.li`
  font-weight: 500;
  line-height: 1.5;
  font-size: 0.9em;
`
