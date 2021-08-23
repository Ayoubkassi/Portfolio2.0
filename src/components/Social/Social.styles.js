import styled from 'styled-components';

export const Item = styled.div`
  width : ${({ size }) => (size === 'medium' ? '30px' : '50px' )};
  padding : 5px;
  background : white;
  border-radius : 50%;
  margin-right : 14px;
  margin-bottom : 14px;
  &:hover{
    cursor : pointer;
  }
`
export const Social = styled.div`
  display : flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'column' ? 'column' : 'row')};
`
