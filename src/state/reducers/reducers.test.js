import { fromJS } from 'immutable';
import { initialState, reducers, todos } from './reducers';
import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../actions/actions';

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock('./recordable/recordable', () => jest.fn(args => args));

describe('todos', () => {
  const testTodo = {
    id: 'test-id',
    name: 'Test Todo',
    description: 'Pass all tests!',
    creationDate: '1581537053069'
  };

  it('returns default state', () => {
    expect(todos()).toEqual(initialState);
  });

  it('returns state for an unrecognised action', () => {
    const testState = fromJS({
      'test-id': testTodo
    });
    const expectedState = testState;
    const testAction = {type: 'TEST_ACTION'};

    expect(todos(testState, testAction)).toEqual(expectedState);
  });

  it('adds a todo to state when an ADD_TODO action is passed', () => {
    const expectedState = fromJS({
      'test-id': testTodo
    });
    const testAction = {
      type: ADD_TODO,
      todo: testTodo
    };

    expect(todos(fromJS({}), testAction)).toEqual(expectedState);
  });

  it('updates an existing todo when an UPDATE_TODO action is passed', () => {
    const testState = fromJS({
      'test-id': testTodo
    });
    const expectedState = fromJS({
      'test-id': {
        ...testTodo,
        description: 'A few tests down, some to go!'
      }
    });

    const testAction = {
      type: UPDATE_TODO,
      todo: {
        id: 'test-id',
        name: 'Test Todo',
        description: 'A few tests down, some to go!',
        creationDate: '1581537053069'
      }
    };

    expect(todos(testState, testAction)).toEqual(expectedState);
  });

  it('removes an existing todo when a REMOVE_TODO action is passed', () => {
    const testTodoTwo = {
      ...testTodo,
      id: 'test-id-2'
    };
    const testState = fromJS({
      'test-id': testTodo,
      'test-id-2': testTodoTwo
    });
    const expectedState = fromJS({
      'test-id': testTodo
    });

    const testAction = {
      type: REMOVE_TODO,
      id: testTodoTwo.id
    };

    expect(todos(testState, testAction)).toEqual(expectedState);
  });
});

describe('reducers', () => {
  it('contains recordable todos', () => {
    expect(reducers).toEqual({todos});
  });
});
