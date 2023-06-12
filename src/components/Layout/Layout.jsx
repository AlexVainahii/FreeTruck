import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Header,
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

          {!user ? (
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              <NavigationLink to="/about">Про нас</NavigationLink>
              <NavigationLink to="/contacts">Контакти</NavigationLink>
            </Navigation>
          ) : (
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              <NavigationLink to="/carrier">Перевізникам</NavigationLink>
              <NavigationLink to="/cargo_owner">
                Власникам вантажу
              </NavigationLink>
              <NavigationLink to="/myship">Мої перевезення</NavigationLink>
              <NavigationLink to="/create">Створити замовлення</NavigationLink>
              <NavigationLink to="/about">Про нас</NavigationLink>
              <NavigationLink to="/contacts">Контакти</NavigationLink>
            </Navigation>
          )}
          <ToastContainer />
          <AuthFormContainer>
            <AuthForm />
          </AuthFormContainer>
        </Sidebar>
        <Outlet />
      </Container>
    </ResponsiveLayout>
  );
};
export default Layout;
