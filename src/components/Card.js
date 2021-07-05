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
      : { backgroundColor: '#dbdbdb' };
  };

  return todoList.length > 0 ? (
    todoList.map((todo, index) => (
      <div
        key={todo.id}
        className='card shadow my-2'
        style={getCardStyle(todo.done)}
      >
        <div className='card-body'>
          <div className='my-1 form-check d-flex'>
            <input
              type='checkbox'
              className='form-check-input'
              id={index}
              onChange={() => onCheck(index)}
              checked={todo.done}
            />
            <label className={getLabelClassName(todo.done)} htmlFor={index}>
              {todo.text}
            </label>
            <button
              className='btn btn-sm btn-danger rounded-pill'
              onClick={() => onDelete(index)}
            >
              <i className='bi bi-trash'></i>
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className='card my-3 shadow' style={{ backgroundColor: '#ffd980' }}>
      <div className='card-body text-center'>
        <i className='bi bi-inbox' />
      </div>
    </div>
  );
};

export default TodoList;
