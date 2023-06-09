import styled from 'styled-components';
import FonImage from '../../images/Home.jpg';

export const HomeContainer = styled.div`
  text-align: center;
  max-width: 80%;
  max-height: 80%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
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
export const Highlight = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #106701;
`;
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: #000;
  }
`;
export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
