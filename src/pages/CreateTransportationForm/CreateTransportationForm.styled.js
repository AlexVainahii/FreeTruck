import styled from 'styled-components';
import FonImage from '../../images/BackTruck.jpg';

export const FormContainer = styled.div`
  max-width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  height: 20px;
  margin: 0 0 10px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    margin-bottom: 5px;
    height: 15px;
    font-weight: bold;
  }

  input {
    height: 10px;
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

export const ResponsiveContainer = styled.div`
  height: 80%;
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
  height: 98vh;
  max-width: calc(100% - 300px);
  flex-grow: 1;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
export const MainContent = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TabHeader = styled.div`
  display: flex;
`;

export const TabButton = styled.button`
  margin: 0 5px 5px 0;
  display: block;
  padding: 10px;
  text-align: center;
  background-color: yellow;
  color: #000;
  border-radius: 6px;
  text-decoration: none;
  &:hover {
    background-color: yellow;
    color: #000;
  }
`;
export const TabButton1 = styled.button`
  margin: 0 5px 5px 0;
  display: block;
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: #007bff;
  border-radius: 6px;
  text-decoration: none;
  &:hover {
    background-color: yellow;
    color: #000;
  }
`;
export const List = styled.ul`
  position: absolute;
  width: 32%;
  top: 50%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 10px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 3px;
  background-color: #f2f2f2;

  &:hover {
    color: #fff;
    background-color: #007bff;
  }
`;
