import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoUpdate } from './types';

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodos: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateTodos: (state, action: PayloadAction<TodoUpdate>) => {
      const todo = state.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.item = action.payload.item;
      }
    },
    completeTodos: (state, action: PayloadAction<number>) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = todosSlice.actions;
export default todosSlice.reducer;
