import { useState } from 'react';

const Input = ({ onClickProps }) => {
  const [text, setText] = useState('');

  const onTextChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const onClick = (event) => {
    event.preventDefault();
    onClickProps(text);
    setText('');
  };

  return (
    <form className='d-flex input-group shadow'>
      <input
        className='form-control flex-auto'
        placeholder='ToDo ekle...'
        onChange={onTextChange}
        value={text}
      />
      <button type='submit' className='btn btn-secondary' onClick={onClick}>
        <i className='bi bi-clipboard-plus'></i>
      </button>
    </form>
  );
};

export default Input;
