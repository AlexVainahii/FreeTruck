import styled from 'styled-components';

export const AuthFormErrorMessage = styled.p`
  color: red;
  margin-bottom: 16px;
`;

export const AuthFormSuccessMessage = styled.p`
  color: green;
  margin-bottom: 16px;
`;

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthFormInput = styled.input`
  width: 90%;
  height: 20px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const AuthFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AuthFormButton = styled.button`
  margin-right: 20px;
  padding-top: 5px;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: #000;
  }
`;
