import React, { useState } from 'react';
import { addTodos } from '../../redux/reducer';
import { GoPlus } from 'react-icons/go';
import { BoxTodos, AddButton } from './Todos.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/types';

export const Todos: React.FC = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  useSelector((state: RootState) => state.todos);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const createTodo = () => {
    if (!todo.trim()) return;
    dispatch(
      addTodos({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      }),
    );
    setTodo('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      createTodo();
    }
  };

  return (
    <BoxTodos>
      <input type='text' onChange={handleInputChange} onKeyPress={handleKeyPress} value={todo} />
      <AddButton onClick={createTodo} disabled={todo.trim() === ''}>
        <GoPlus />
      </AddButton>
    </BoxTodos>
  );
};
