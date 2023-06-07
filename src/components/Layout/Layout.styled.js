const { styled } = require('styled-components');

const Container = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 200px; /* Задайте ширину, яку ви хочете */
  background-color: #f1f1f1; /* Задайте бажаний колір фону */
`;

const Content = styled.div`
  flex-grow: 1;
`;
const Header = styled.div`
  background-color: #333; /* Задайте бажаний колір фону хедера */
  color: #fff; /* Задайте бажаний колір тексту хедера */
  padding: 20px;
`;
const MainContent = styled.div`
  padding: 20px;
`;

export { Container, Sidebar, Header, Content, MainContent };
