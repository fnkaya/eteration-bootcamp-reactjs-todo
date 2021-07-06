import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../actions/actionTypes';
import {
  loadTodosSuccess,
  loadTodosFailure,
  addTodoSuccess,
  addTodoFailure,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
} from '../actions/todoActions';
import {
  LOAD_TODOS_URL,
  ADD_TODO_URL,
  UPDATE_TODO_URL,
  DELETE_TODO_URL,
} from './path';

export function* loadTodosHandler() {
  try {
    const response = yield call(fetch, LOAD_TODOS_URL, {});
    if (response.status !== 200) {
      yield put(loadTodosFailure('An error occurred'));
    } else {
      let responseJSON = yield call((res) => res.json(), response);
      yield put(loadTodosSuccess(responseJSON));
    }
  } catch (error) {
    yield put(loadTodosFailure(error));
  }
}

export function* addTodoHandler(action) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: action.payload,
      done: false,
    }),
  };

  try {
    const response = yield call(fetch, ADD_TODO_URL, options);
    let responseJSON = yield call((res) => res.json(), response);
    yield put(addTodoSuccess(responseJSON));
    yield loadTodosHandler();
  } catch (error) {
    yield put(addTodoFailure(error));
  }
}

export function* updateTodoHandler(action) {
  const { id, text, done } = action.payload;
  const REQUEST_URL = `${UPDATE_TODO_URL}/${id}`;
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      text,
      done: !done,
    }),
  };

  try {
    const response = yield call(fetch, REQUEST_URL, options);
    let responseJSON = yield call((res) => res.json(), response);
    yield put(updateTodoSuccess(responseJSON));
    yield loadTodosHandler();
  } catch (error) {
    yield put(updateTodoFailure(error));
  }
}

export function* deleteTodoHandler(action) {
  const REQUEST_URL = `${DELETE_TODO_URL}/${action.payload}`;
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    yield call(fetch, REQUEST_URL, options);
    yield put(deleteTodoSuccess());
    yield loadTodosHandler();
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

export default function* sagaHandler() {
  yield takeLatest(LOAD_TODOS, loadTodosHandler);
  yield takeLatest(ADD_TODO, addTodoHandler);
  yield takeLatest(UPDATE_TODO, updateTodoHandler);
  yield takeLatest(DELETE_TODO, deleteTodoHandler);
}
