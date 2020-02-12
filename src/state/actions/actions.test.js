import * as actions from './actions';

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

  it('exports an updateTodo function that returns an REMOVE_TODO action with a todo', () => {
    const action = actions.removeTodo(testTodo);

    expect(action).toEqual({
      type: actions.REMOVE_TODO,
      todo: testTodo
    });
  });
});
