import {
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from './actionTypes';

export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const loadTodosSuccess = (todoList) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: todoList,
});

export const loadTodosFailure = (error) => ({
  type: LOAD_TODOS_FAILURE,
  error,
});

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const addTodoSuccess = () => ({
  type: ADD_TODO_SUCCESS,
});

export const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  error,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const updateTodoSuccess = () => ({
  type: UPDATE_TODO_SUCCESS,
});

export const updateTodoFailure = (error) => ({
  type: UPDATE_TODO_FAILURE,
  error,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const deleteTodoSuccess = () => ({
  type: DELETE_TODO_SUCCESS,
});

export const deleteTodoFailure = (error) => ({
  type: DELETE_TODO_FAILURE,
  error,
});
