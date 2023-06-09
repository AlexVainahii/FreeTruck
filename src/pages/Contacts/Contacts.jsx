import React from 'react';
import {
  ContactContainer,
  ContactInfo,
  Content,
  Label,
  Link,
  MainContent,
  Subtitle,
  Title,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <Content>
      <MainContent>
        {' '}
        <ContactContainer>
          <Title>Контакти</Title>
          <Subtitle>
            Зв'яжіться з нами для отримання додаткової інформації:
          </Subtitle>
          <ContactInfo>
            <Label>Email:</Label>{' '}
            <Link href="mailto:info@freetruck.com">info@freetruck.com</Link>
          </ContactInfo>
          <ContactInfo>
            <Label>Телефон:</Label>{' '}
            <Link href="tel:+380980000000">+38 098 000 000 0</Link>
          </ContactInfo>
          <ContactInfo>
            <Label>Адреса:</Label> Free Truck, вул. Центральна 10, м. Київ,
            Україна
          </ContactInfo>
        </ContactContainer>
      </MainContent>
    </Content>
  );
};

export default Contacts;
