import styled from '@emotion/styled'

export const FormWrap = styled.form`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 1px 6px;
`;
export const LabelWrap = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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