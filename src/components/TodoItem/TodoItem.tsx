import React, { useRef, KeyboardEvent } from 'react';
import { Card, BoxButtons } from './TodoItem.style';
import { todoItemTexts } from 'text';

interface TodoItemProps {
  item: {
    id: number;
    item: string;
    completed: boolean;
  };
  updateTodo: (value: { id: number; item: string }) => void;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  item,
  updateTodo,
  removeTodo,
  completeTodo,
}) => {
  const { id, item: todoItem, completed } = item;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const changeFocus = () => {
    if (!inputRef.current) return;
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' || !inputRef.current) return;
    updateTodo({ id, item: inputRef.current.value });
    inputRef.current.disabled = true;
  };

  return (
    <Card key={id}>
      <textarea
        ref={inputRef}
        disabled={inputRef.current?.disabled ?? true}
        defaultValue={todoItem}
        onKeyDown={update}
      />
      <BoxButtons>
        <button onClick={changeFocus}>{todoItemTexts.editButton}</button>
        <button className='complete' onClick={() => completeTodo(id)}>
          {todoItemTexts.completeButton}
        </button>
        <button className='delete' onClick={() => removeTodo(id)}>
          {todoItemTexts.deleteButton}
        </button>
      </BoxButtons>
      {completed && <span>{todoItemTexts.completeTodo}</span>}
    </Card>
  );
};
