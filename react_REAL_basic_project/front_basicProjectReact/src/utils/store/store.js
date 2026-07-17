import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import listSliceReducer from './listSlice'

export const store = configureStore({
  reducer: {
    // Add your reducers here
    contador: counterReducer,
    lista: listSliceReducer
  },
});