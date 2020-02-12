import { reducers, todos } from './reducers';
import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../actions/actions';

describe('todos', () => {
  const testTodo = {
    id: 'test-id',
    name: 'Test Todo',
    description: 'Pass all tests!',
    creationDate: '1581537053069'
  };

  it('returns default state', () => {
    expect(todos()).toEqual({});
  });

  it('returns state for an unrecognised action', () => {
    const initialState = {
      'test-id': testTodo
    };
    const expectedState = initialState;
    const testAction = {type: 'TEST_ACTION'};

    expect(todos(initialState, testAction)).toEqual(expectedState);
  });

  it('adds a todo to state when an ADD_TODO action is passed', () => {
    const expectedState = {
      'test-id': testTodo
    };
    const testAction = {
      type: ADD_TODO,
      todo: testTodo
    };

    expect(todos({}, testAction)).toEqual(expectedState);
  });

  it('updates an existing todo when an UPDATE_TODO action is passed', () => {
    const initialState = {
      'test-id': testTodo
    };
    const expectedState = {
      'test-id': {
        ...testTodo,
        description: 'A few tests down, some to go!'
      }
    };

    const testAction = {
      type: UPDATE_TODO,
      todo: {
        id: 'test-id',
        name: 'Test Todo',
        description: 'A few tests down, some to go!',
        creationDate: '1581537053069'
      }
    };

    expect(todos(initialState, testAction)).toEqual(expectedState);
  });

  it('removes an existing todo when a REMOVE_TODO action is passed', () => {
    const testTodoTwo = {
      ...testTodo,
      id: 'test-id-2'
    };
    const initialState = {
      'test-id': testTodo,
      'test-id-2': testTodoTwo
    };
    const expectedState = {
      'test-id': testTodo
    };

    const testAction = {
      type: REMOVE_TODO,
      todo: testTodoTwo
    };

    expect(todos(initialState, testAction)).toEqual(expectedState);
  });
});

describe('reducers', () => {
  it('contains todos', () => {
    expect(reducers).toEqual({todos});
  });
});
