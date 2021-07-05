import { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/Card';
import {
  insertToLocaleStorage,
  getFromLocalStorage,
} from './service/StorageService';
import uniqid from 'uniqid';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(getFromLocalStorage());
  }, []);

  const onInsert = (text) => {
    const id = uniqid();
    setTodoList([
      {
        done: false,
        text,
        id,
      },
      ...todoList,
    ]);
  };

  useEffect(() => {
    insertToLocaleStorage(todoList);
  }, [todoList]);

  const onDelete = (index) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  const onCheckChange = (index) => {
    const newList = todoList.filter((todo, i) => i !== index);
    const todo = todoList.find((e, i) => i === index);
    todo.done = !todo.done;
    setTodoList(todo.done ? [...newList, todo] : [todo, ...newList]);
  };

  return (
    <div className='container'>
      <Header title='ToDo' />
      <div className='d-flex justify-content-center'>
        <Input onClickProps={onInsert} />
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
