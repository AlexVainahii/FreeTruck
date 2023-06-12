import { createSlice } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA63klsSxfah1zsHdjXTMzPmAJ9xAwO9b8',
  authDomain: 'free-truck.firebaseapp.com',
  projectId: 'free-truck',
  storageBucket: 'free-truck.appspot.com',
  messagingSenderId: '870755627128',
  appId: '1:870755627128:web:86c1eaacab7ebbbd497d8d',
  measurementId: 'G-126E9RZB3Y',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getItemsSlice = createSlice({
  name: 'getItems',
  initialState: {
    loading: false,
    error: null,
    items: [],
  },
  reducers: {
    getItemsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getItemsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    getItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getItemsStart, getItemsSuccess, getItemsFailure } =
  getItemsSlice.actions;

export const fetchItems = () => {
  return async dispatch => {
    dispatch(getItemsStart());
    try {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const items = [];
      querySnapshot.forEach(doc => {
        const item = { id: doc.id, ...doc.data() };
        items.push(item);
      });
      dispatch(getItemsSuccess(items));
      return items;
    } catch (error) {
      dispatch(getItemsFailure(error.message));
    }
  };
};

export const getItemsReducer = getItemsSlice.reducer;
