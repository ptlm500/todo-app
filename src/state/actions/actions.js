import {
  BACK,
  FORWARD,
  TOGGLE_RECORDING,
  CLEAR_RECORDING
} from '../reducers/recordable/recordableActions';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

/**
 * A todo
 * @typedef {Object} Todo
 * @property {string} id uuid of the todo
 * @property {string} name name of the todo
 * @property {string} description description of the todo
 * @property {creationDate} creationDate creation date and time of the todo
 */

/**
* Action to add a Todo to state
* @param {Todo} todo The Todo to be added
*/
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

/**
* Action to update a Todo in state
* @param {Todo} todo The Todo to be updated
*/
export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  };
}

/**
 * Action to remove a Todo from state by id
 * @param {string} id The id of the Todo to remove
 */
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

/**
 * Action to set the state back
 */
export function back() {
  return {type: BACK};
}

/**
 * Action to set the state forward
 */
export function forward() {
  return {type: FORWARD};
}

/**
 * Action to toggle recording
 */
export function toggleRecording() {
  return {type: TOGGLE_RECORDING};
}

/**
 * Action to clear recorded state
 */
export function clearRecording() {
  return {type: CLEAR_RECORDING};
}
