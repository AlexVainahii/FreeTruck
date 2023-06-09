import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { setError, setLoading, setUser } from '../store/auth/authSlice';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA63klsSxfah1zsHdjXTMzPmAJ9xAwO9b8',
  authDomain: 'free-truck.firebaseapp.com',
  projectId: 'free-truck',
  storageBucket: 'free-truck.appspot.com',
  messagingSenderId: '870755627128',
  appId: '1:870755627128:web:86c1eaacab7ebbbd497d8d',
  measurementId: 'G-126E9RZB3Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth1 = getAuth(app);

// Створюємо провайдера Google для авторизації через Google
const googleProvider = new GoogleAuthProvider();

export const register = (email, password) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const userCredential = await createUserWithEmailAndPassword(
      auth1,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const userCredential = await signInWithEmailAndPassword(
      auth1,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const loginWithGoogle = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const userCredential = await signInWithPopup(auth1, googleProvider);
    const user = userCredential.user;
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
export const logout = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    await signOut(auth1);
    dispatch(setUser(null));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
