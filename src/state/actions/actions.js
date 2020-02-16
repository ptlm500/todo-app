import {
  BACK,
  FORWARD,
  TOGGLE_RECORDING,
  CLEAR_RECORDING
} from '../reducers/recordable/recordableActions';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function back() {
  return {type: BACK};
}

export function forward() {
  return {type: FORWARD};
}

export function toggleRecording() {
  return {type: TOGGLE_RECORDING};
}

export function clearRecording() {
  return {type: CLEAR_RECORDING};
}
