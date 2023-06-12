import styled from 'styled-components';

export const TransportationItem = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 100px;
  padding: 5px;
  font-weight: 700;
  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
  }
`;

export const StyledLink = styled.div`
  display: block;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    margin-bottom: 20px;
  }
`;

export const Rout = styled.div`
  width: 20%;
  margin: 2px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  div {
    font-size: 10px;
    word-break: break-all;
    text-align: center;
    padding: 2px;
  }

  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    width: 100%;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 30%;
  width: 60%;

  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    height: 40%;
    width: 40%;
  }
`;
