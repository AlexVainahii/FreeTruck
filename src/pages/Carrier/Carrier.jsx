import React from 'react';
import { Content, MainContent, Title, TitleContainer } from './Carrier.styled';
import TransportationList from '../../components/TransportationList/TransportationList';
import { transportations } from '../../service/Transportation';
import { useSelector } from 'react-redux';

const Carrier = () => {
  const user = useSelector(state => state.auth.user);
  const transportations = useSelector(state => state.items[0]);
  console.log(transportations);
  return (
    <Content>
      {user && (
        <>
          <TitleContainer>
            <Title>Список перевезень</Title>
          </TitleContainer>

          <MainContent>
            <TransportationList transportations={transportations} />
          </MainContent>
        </>
      )}
    </Content>
  );
};

export default Carrier;
