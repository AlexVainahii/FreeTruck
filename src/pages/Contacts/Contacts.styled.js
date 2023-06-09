import styled from 'styled-components';
import FonImage from '../../images/Contact.jpg';

export const ContactContainer = styled.div`
  max-width: 80%;
  max-height: 80%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
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

export const ContactInfo = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Link = styled.a`
  color: #007bff;
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
