import React from 'react';

const TodoList = ({ todoList, onDelete, onCheck }) => {
  const getLabelClassName = (done) => {
    return (
      'form-check-label flex-fill ms-3 ' +
      (done ? 'text-decoration-line-through' : '')
    );
  };

  const getCardStyle = (done) => {
    return done
      ? { backgroundColor: '#f5c0bc' }
      : { backgroundColor: '#edf0ee' };
  };

  const todoCard = (todo, index) => (
    <div key={todo.id} className='card my-2' style={getCardStyle(todo.done)}>
      <div className='card-body'>
        <div className='my-1 form-check d-flex'>
          <input
            type='checkbox'
            className={'form-check-input'}
            id={`todo-${index}`}
            onChange={() => onCheck(todo)}
            checked={todo.done}
          />
          <label
            className={getLabelClassName(todo.done)}
            htmlFor={`todo-${index}`}
          >
            {todo.text}
          </label>
          <button
            className='btn btn-sm btn-danger rounded-pill'
            onClick={() => onDelete(todo.id)}
          >
            <i className='bi bi-trash'></i>
          </button>
        </div>
      </div>
    </div>
  );

  const emptyCard = (
    <div className='card my-3' style={{ backgroundColor: '#fffce8' }}>
      <div className='card-body text-center'>
        <i className='bi bi-inbox' />
      </div>
    </div>
  );

  return todoList.length > 0
    ? todoList.map((todo, index) => todoCard(todo, index))
    : emptyCard;
};

export default TodoList;
