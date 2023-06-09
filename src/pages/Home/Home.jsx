import React from 'react';
import {
  Button,
  Content,
  Description,
  Highlight,
  HomeContainer,
  MainContent,
  Subtitle,
  Title,
} from './Home.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAuthForm } from 'store/auth/authSlice';

const HomePage = () => {
  const showAuthForm = useSelector(state => state.auth.showAuthForm);
  const dispatch = useDispatch();
  const handleToggleAuthForm = () => {
    dispatch(setShowAuthForm(true));
  };
  return (
    <Content>
      <MainContent>
        <HomeContainer>
          <Title>Ласкаво просимо до Free Truck!</Title>
          <Subtitle>Ми займаємося вантажними перевезеннями.</Subtitle>
          <Description>
            Замовляйте перевезення вантажу у нас, швидко та надійно доставимо
            його в будь-яке місце.
          </Description>
          <Highlight>Зручно. Безпечно. Швидко.</Highlight>
          <Button onClick={handleToggleAuthForm}>Увійти в систему</Button>
        </HomeContainer>
      </MainContent>
    </Content>
  );
};

export default HomePage;
