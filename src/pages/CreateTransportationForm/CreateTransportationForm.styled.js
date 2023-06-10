import styled from 'styled-components';
import FonImage from '../../images/About.jpg';

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  padding: 10px;
  background-color: ${({ active }) => (active ? '#007bff' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#ccc')};
  }
`;

// Респонсивні стилі
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${FormContainer} {
      max-width: 100%;
    }

    ${FormField} {
      label {
        text-align: center;
      }
      input {
        width: 100%;
      }
    }
  }
`;
export const Content = styled.div`
  height: 100vh;
  max-width: calc(100% - 300px);
  flex-grow: 1;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
