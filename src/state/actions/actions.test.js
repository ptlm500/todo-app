import * as actions from './actions';
import {
  BACK,
  FORWARD,
  TOGGLE_RECORDING,
  CLEAR_RECORDING
} from '../reducers/recordable/recordableActions';

const testTodo = {
  id: 'test-id',
  name: 'Test Todo',
  description: 'Pass all tests!',
  creationDate: '1581537053069'
};

describe('actions', () => {
  it('exports ADD_TODO', () => {
    expect(actions.ADD_TODO).toBe('ADD_TODO');
  });

  it('exports UPDATE_TODO', () => {
    expect(actions.UPDATE_TODO).toBe('UPDATE_TODO');
  });

  it('exports REMOVE_TODO', () => {
    expect(actions.REMOVE_TODO).toBe('REMOVE_TODO');
  });

  it('exports an addTodo function that returns an ADD_TODO action with a todo', () => {
    const action = actions.addTodo(testTodo);

    expect(action).toEqual({
      type: actions.ADD_TODO,
      todo: testTodo
    });
  });

  it('exports an updateTodo function that returns an UPDATE_TODO action with a todo', () => {
    const action = actions.updateTodo(testTodo);

    expect(action).toEqual({
      type: actions.UPDATE_TODO,
      todo: testTodo
    });
  });

  it('exports an updateTodo function that returns an REMOVE_TODO action with an id', () => {
    const action = actions.removeTodo(testTodo.id);

    expect(action).toEqual({
      type: actions.REMOVE_TODO,
      id: testTodo.id
    });
  });

  it('exports a back function that returns a BACK action', () => {
    expect(actions.back()).toEqual({type: BACK});
  });

  it('exports a forward function that returns a FORWARD action', () => {
    expect(actions.forward()).toEqual({type: FORWARD});
  });

  it('exports a toggleRecording function that returns a TOGGLE_RECORDING action', () => {
    expect(actions.toggleRecording()).toEqual({type: TOGGLE_RECORDING});
  });

  it('exports a clearRecording function that returns a CLEAR_RECORDING action', () => {
    expect(actions.clearRecording()).toEqual({type: CLEAR_RECORDING});
  });
});
