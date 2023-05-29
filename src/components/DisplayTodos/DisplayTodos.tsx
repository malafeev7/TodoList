import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodos, updateTodos, completeTodos } from 'redux/reducer';
import { DisplayBox, ButtonsBox, DisplayTodosList, CatBox } from './DisplayTodos.style';
import { RootState } from 'redux/types';
import Cat from 'assets/image/cat.webp';
import CatGif from 'assets/image/cat.gif';
import { TodoItem } from 'components/TodoItem';
import { displayTodosTexts } from 'text';

const SORT_TYPES = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  ALL: 'all',
};

const BUTTONS = [
  { type: SORT_TYPES.ACTIVE, text: displayTodosTexts.activeButton },
  { type: SORT_TYPES.COMPLETED, text: displayTodosTexts.completedButton },
  { type: SORT_TYPES.ALL, text: displayTodosTexts.allButton },
];

export const DisplayTodos: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [sort, setSort] = useState<string>(SORT_TYPES.ALL);
  const [imgSrc, setImgSrc] = useState(Cat);

  const sortedTodos = useMemo(() => {
    switch (sort) {
      case SORT_TYPES.ACTIVE:
        return todos.filter((item) => !item.completed);
      case SORT_TYPES.COMPLETED:
        return todos.filter((item) => item.completed);
      case SORT_TYPES.ALL:
      default:
        return todos;
    }
  }, [todos, sort]);

  if (!todos.length) {
    return (
      <CatBox>
        <p>{displayTodosTexts.catParagraphTop}</p>
        <img
          src={imgSrc}
          width={350}
          height={500}
          alt='cat'
          onMouseOver={() => setImgSrc(CatGif)}
          onMouseOut={() => setImgSrc(Cat)}
        />{' '}
        <p>{displayTodosTexts.catParagraphDown}</p>
      </CatBox>
    );
  }

  return (
    <DisplayBox>
      <ButtonsBox>
        {BUTTONS.map((button) => (
          <button
            key={button.type}
            className={sort === button.type ? 'active' : ''}
            onClick={() => setSort(button.type)}>
            {button.text}
          </button>
        ))}
      </ButtonsBox>
      <DisplayTodosList>
        {sortedTodos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={() => dispatch(removeTodos(item.id))}
            updateTodo={(itemToUpdate) => dispatch(updateTodos(itemToUpdate))}
            completeTodo={(itemToComplete) => dispatch(completeTodos(itemToComplete))}
          />
        ))}
      </DisplayTodosList>
    </DisplayBox>
  );
};
