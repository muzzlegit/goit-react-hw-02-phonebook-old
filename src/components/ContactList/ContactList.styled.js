import styled from '@emotion/styled'

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #612a11;
  border-radius: 4px;

`;
export const ItemText = styled.p`
  margin-bottom: 4px;

`;
export const ButtonWrap = styled.button`
  padding:3px 10px;
  border: 1px solid #612a11;
  border-radius: 4px;
  background-color: #b4786b;

  &:hover{
    cursor: pointer;
  }
`;