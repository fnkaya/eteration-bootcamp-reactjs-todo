import { fromJS } from 'immutable';
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
} from '../actions/actionTypes';

const initialState = fromJS({ todoList: [] });

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return state.merge({ pending: true, error: undefined });

    case LOAD_TODOS_SUCCESS:
      return state.merge({ pending: false, todoList: action.payload });

    case LOAD_TODOS_FAILURE:
      return state.merge({ pending: false, error: action.error });

    case ADD_TODO:
      return state.merge({ pending: true, error: undefined });

    case ADD_TODO_SUCCESS:
      return state.merge({ pending: false });

    case ADD_TODO_FAILURE:
      return state.merge({ pending: false, error: action.error });

    case UPDATE_TODO:
      return state.merge({ pending: true, error: undefined });

    case UPDATE_TODO_SUCCESS:
      return state.merge({ pending: false });

    case UPDATE_TODO_FAILURE:
      return state.merge({ pending: false, error: action.error });

    case DELETE_TODO:
      return state.merge({ pending: true, error: undefined });

    case DELETE_TODO_SUCCESS:
      return state.merge({ pending: false });

    case DELETE_TODO_FAILURE:
      return state.merge({ pending: false, error: action.error });

    default:
      return state;
  }
};

export default todoReducer;
