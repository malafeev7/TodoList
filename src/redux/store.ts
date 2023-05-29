import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/reducer';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
