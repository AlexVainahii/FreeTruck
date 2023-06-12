import { createSlice } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

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

const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [] },
  reducers: {
    addItem: async (state, action) => {
      const newItem = action.payload;
      try {
        const docRef = await addDoc(collection(db, 'items'), newItem);
        newItem.id = docRef.id;
        state.items.push(newItem);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    removeItem: async (state, action) => {
      const itemId = action.payload;

      try {
        await deleteDoc(doc(db, 'items', itemId.id));

        state = state.items.filter(item => item.id !== itemId.id);
      } catch (error) {
        console.error('Error removing item:', error);
      }
    },
    updateItem: async (state, action) => {
      const updatedItem = action.payload;
      console.log(state.items);
      try {
        await updateDoc(doc(db, 'items', updatedItem.id), updatedItem);
        const index = state.items.findIndex(item => item.id === updatedItem.id);

        if (index !== -1) {
          state.items[index] = updatedItem;
        }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
