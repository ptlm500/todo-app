import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions/actions';
import { recordable } from './recordable';

export const initialState = fromJS({
  'sample-todo': {
    id: 'sample-todo',
    name: 'Create your first Todo',
    description: 'Create your first Todo by clicking the button below!',
    creationDate: 1582238666000
  }
});

/**
 * An action
 * @typedef {Object} Action
 * @property {string} type the action type
 */

/**
 * Todos reducer
 * @param {Object} [state] Immutable Map representing current state
 * @param {Action} action The action to process
 * @return {Object} Immutable Map containing the current state
 */
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
