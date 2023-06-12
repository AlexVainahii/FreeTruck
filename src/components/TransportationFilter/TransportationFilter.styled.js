import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
display:block
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
  }
  &:hover {
    background-color: yellow;
    color: #000;
  }
`;
