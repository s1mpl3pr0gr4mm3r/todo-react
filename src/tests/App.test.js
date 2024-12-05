import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { addTodo } from '../slices/todoSlice';

describe('Todo Slice', () => {
  it('should add a todo to the list', () => {
    const store = configureStore({
      reducer: {
        todo: todoReducer,
      },
    });

    const initialState = store.getState().todo.todoList;
    expect(initialState).toEqual([]);

    const newTodo = {
      id: '1',
      title: 'Test Todo',
      status: 'incomplete',
      time: '10:00 AM, 12/05/2024',
    };
    store.dispatch(addTodo(newTodo));

    const updatedState = store.getState().todo.todoList;

    expect(updatedState).toHaveLength(1);
    expect(updatedState[0]).toEqual(newTodo);
  });
});
