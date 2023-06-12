import styled from 'styled-components';
import FonImage from '../../images/Main.jpg';
import SideImage from '../../images/SideBar.jpg';
export const Content = styled.div`
  height: 98vh;
  max-width: calc(100% - 300px);
  flex-grow: 1;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
`;
export const MainContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
`;
export const Title = styled.h2`
  text-align: center;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${SideImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 50%;
  color: #fff;
`;
