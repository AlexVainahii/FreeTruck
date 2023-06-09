import { Link, Outlet } from 'react-router-dom';
import {
  Container,
  Content,
  Header,
  MainContent,
  ResponsiveLayout,
  Sidebar,
  Navigation,
  NavigationLink,
  AuthFormContainer,
} from './Layout.styled';
import LogoImg from '../../images/FreeTruck.png';
import AuthForm from 'components/AuthForm/AuthForm';
import { useSelector } from 'react-redux';

const Layout = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <ResponsiveLayout>
      <Container>
        <Sidebar>
          <Header>
            <Link to="/">
              <img src={LogoImg} alt="logo" width={'250px'} height={'80px'} />
            </Link>
          </Header>

          {!user && (
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              <NavigationLink to="/about">Про нас</NavigationLink>
              <NavigationLink to="/contact">Контакти</NavigationLink>
            </Navigation>
          )}
          <AuthFormContainer>
            <AuthForm />
          </AuthFormContainer>
        </Sidebar>
        <Content>
          <MainContent>
            <Outlet />
          </MainContent>
        </Content>
      </Container>
    </ResponsiveLayout>
  );
};
export default Layout;
