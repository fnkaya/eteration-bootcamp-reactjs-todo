import { useState } from 'react';

const Input = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onTextChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const onClick = (event) => {
    event.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form className='d-flex input-group p-3 bg-white rounded-3'>
      <input
        className='form-control flex-auto border-0 me-3'
        placeholder='ToDo ekle...'
        onChange={onTextChange}
        value={text}
      />
      <button
        type='submit'
        className='btn btn-success rounded-pill'
        onClick={onClick}
      >
        <i className='bi bi-clipboard-plus'></i>
      </button>
    </form>
  );
};

export default Input;
