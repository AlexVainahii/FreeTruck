import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoading,
  setError,
  setShowAuthForm,
} from '../../store/auth/authSlice';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GoogleIcon from '@mui/icons-material/Google';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  login,
  loginWithGoogle,
  logout,
  register,
} from '../../service/authActions';

import {
  AuthFormContainer,
  AuthFormInput,
  AuthFormButton,
  AuthFormErrorMessage,
  AuthFormSuccessMessage,
  AuthFormButtonContainer,
} from './AuthForm.styled';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showAuthForm = useSelector(state => state.auth.showAuthForm);
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const successMessage = useSelector(state => state.auth.successMessage);
  const dispatch = useDispatch();

  const handleToggleAuthForm = () => {
    dispatch(setShowAuthForm(!showAuthForm));
  };

  const handleRegister = async e => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      await dispatch(register(email, password));
    } catch (error) {
      dispatch(setError(error.message));
    }

    dispatch(setLoading(false));
  };

  const handleLogin = async e => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      await dispatch(login(email, password));
    } catch (error) {
      dispatch(setError(error.message));
    }

    dispatch(setLoading(false));
  };

  const handleGoogleLogin = async () => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      await dispatch(loginWithGoogle());
    } catch (error) {
      console.log('Google Login error:', error);
    }

    dispatch(setLoading(false));
  };

  const handleLogout = async () => {
    try {
      setEmail('');
      setPassword('');
      dispatch(setError(null));
      dispatch(setLoading(true));
      dispatch(setShowAuthForm(false));
      navigate('/');
      await dispatch(logout());
    } catch (error) {
      console.log('Logout error:', error);
    }

    dispatch(setLoading(false));
  };

  const user = useSelector(state => state.auth.user);

  return (
    <AuthFormContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <AuthFormErrorMessage>{error}</AuthFormErrorMessage>}
          {successMessage && (
            <AuthFormSuccessMessage>{successMessage}</AuthFormSuccessMessage>
          )}
          {!user && !showAuthForm ? (
            <AuthFormButton
              onClick={handleToggleAuthForm}
              title="Увійти в систему"
            >
              <AccountCircleIcon />
            </AuthFormButton>
          ) : (
            <>
              {!user ? (
                <form>
                  <AuthFormInput
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <AuthFormInput
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <AuthFormButtonContainer>
                    <AuthFormButton onClick={handleRegister} title="Реєстрація">
                      <AppRegistrationIcon />
                    </AuthFormButton>
                    <AuthFormButton onClick={handleLogin} title="Увійти">
                      <LoginIcon />
                    </AuthFormButton>
                    <AuthFormButton
                      onClick={handleGoogleLogin}
                      title="Увіти за допомого Google-акаунта"
                    >
                      <GoogleIcon />
                    </AuthFormButton>
                    <AuthFormButton
                      onClick={handleToggleAuthForm}
                      title="Відмінити"
                    >
                      <CancelIcon />
                    </AuthFormButton>
                  </AuthFormButtonContainer>
                </form>
              ) : (
                <div>
                  <AuthFormButtonContainer>
                    <p
                      style={{
                        color: '#fff',
                        marginRight: '10px',
                      }}
                    >
                      {user.displayName ? user.displayName : user.email}
                    </p>
                    <AuthFormButton
                      onClick={handleLogout}
                      title="Вийти із системи"
                    >
                      <LogoutIcon />
                    </AuthFormButton>
                  </AuthFormButtonContainer>
                </div>
              )}
            </>
          )}
        </>
      )}
    </AuthFormContainer>
  );
};

export default AuthForm;
