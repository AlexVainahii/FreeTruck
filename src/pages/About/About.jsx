import React from 'react';
import {
  AboutContainer,
  Content,
  Description,
  MainContent,
  Paragraph,
  Subtitle,
  Title,
} from './About..styled.';
const About = () => {
  return (
    <Content>
      <MainContent>
        <AboutContainer>
          <Title>Про нас</Title>
          <Description>
            Free Truck - це компанія, яка спеціалізується на вантажних
            перевезеннях. Ми надаємо професійні послуги з налагодження звязку
            між перевізниками та їхніми клієнтами швидко та надійно.
          </Description>
          <Subtitle>Наша місія</Subtitle>
          <Paragraph>
            Ми прагнемо забезпечити нашим клієнтам найкращі вантажні перевезення
            з найвищою якістю обслуговування. Наша місія полягає в тому, щоб
            забезпечити безпечну та надійний звязок за доступними цінами.
          </Paragraph>
          <Subtitle>Наші цінності</Subtitle>
          <Paragraph>
            - Професіоналізм: Ми працюємо лише з досвідченими та надійними
            водіями, щоб забезпечити високу якість перевезень.
          </Paragraph>
          <Paragraph>
            - Відповідальність: Ми відповідаємо за кожне перевезення та
            гарантуємо його безпечну та своєчасну доставку.
          </Paragraph>
          <Paragraph>
            - Клієнтоорієнтованість: Ми завжди ставимо потреби та задоволення
            наших клієнтів на перше місце.
          </Paragraph>
        </AboutContainer>
      </MainContent>
    </Content>
  );
};

export default About;
