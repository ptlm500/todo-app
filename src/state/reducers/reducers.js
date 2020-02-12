import { combineReducers } from 'redux';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions/actions';

export function todos(state = {}, action) {
  if (!action) {
    console.warn('[todos]: No action passed');
    return state;
  }

  switch(action.type) {
  case ADD_TODO: {
    const newState = state;
    const { todo } = action;

    newState[todo.id] = todo;

    return newState;
  }
  case UPDATE_TODO: {
    const newState = state;
    const { todo } = action;
    const oldTodo = state[todo.id];

    newState[todo.id] = {
      ...oldTodo,
      ...todo
    };

    return newState;
  }
  case REMOVE_TODO: {
    const newState = state;
    const { todo } = action;


    delete newState[todo.id];

    return newState;
  }
  default:
    return state;
  }
}

export const reducers = {
  todos
};

export default combineReducers(reducers);
