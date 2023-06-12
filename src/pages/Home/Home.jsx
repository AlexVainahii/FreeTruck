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
  const user = useSelector(state => state.auth.user);
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
            Знаходьте первізників вантажу у нас, швидко або займіть його місце.
          </Description>
          <Highlight>Зручно. Безпечно. Швидко.</Highlight>
          {!user && (
            <Button onClick={handleToggleAuthForm}>Увійти в систему</Button>
          )}
        </HomeContainer>
      </MainContent>
    </Content>
  );
};

export default HomePage;
