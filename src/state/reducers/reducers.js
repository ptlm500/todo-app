import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions/actions';
import { recordable } from './recordable';

export const initialState = fromJS({
  'test-id': {
    id: 'test-id',
    name: 'Test Todo',
    description: 'Pass all tests!',
    creationDate: '1581549548'
  },
  'test-id-2': {
    id: 'test-id-2',
    name: 'Test Todo 2',
    description: 'Style these things!',
    creationDate: '1581549548'
  }
});

export function todos(state = initialState, action) {
  if (!action) {
    console.warn('[todos]: No action passed');
    return state;
  }

  switch(action.type) {
  case ADD_TODO: {
    const newState = state;
    const { todo } = action;

    return newState.set(todo.id, fromJS(todo));
  }
  case UPDATE_TODO: {
    const newState = state;
    const { todo } = action;

    return newState.mergeIn([todo.id], fromJS(todo));
  }
  case REMOVE_TODO: {
    const newState = state;
    const { id } = action;

    return newState.delete(id);
  }
  default:
    return state;
  }
}

const recordableTodos = recordable(todos);

export const reducers = {
  todos: recordableTodos
};

export default combineReducers(reducers);
