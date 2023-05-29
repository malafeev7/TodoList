export interface Todo {
  id: number;
  item: string;
  completed: boolean;
}

export interface RootState {
  todos: {
    id: number;
    item: string;
    completed: boolean;
  }[];
}

export interface RootState {
  todos: Todo[];
}

export interface TodoUpdate {
  id: number;
  item: string;
}
