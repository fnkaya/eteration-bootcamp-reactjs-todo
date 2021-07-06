import { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/Card';
import {
  loadTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from './actions/todoActions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const todoList = useSelector((state) => state.todoReducer.toJS().todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const onAdd = (text) => {
    dispatch(addTodo(text));
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onCheckChange = (todo) => {
    dispatch(updateTodo(todo));
  };

  return (
    <div className='container'>
      <Header title='Eteration Bootcamp' />
      <div className='d-flex justify-content-center'>
        <Input onAdd={onAdd} />
      </div>
      <TodoList
        todoList={todoList}
        onDelete={onDelete}
        onCheck={onCheckChange}
      />
    </div>
  );
};

export default App;
