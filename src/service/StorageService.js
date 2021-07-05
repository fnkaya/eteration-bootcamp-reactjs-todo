const insertToLocaleStorage = (todo) => {
  localStorage.setItem('todoList', JSON.stringify(todo));
};

const getFromLocalStorage = () => {
  return localStorage.getItem('todoList')
    ? JSON.parse(localStorage.getItem('todoList'))
    : [];
};

export { insertToLocaleStorage, getFromLocalStorage };
