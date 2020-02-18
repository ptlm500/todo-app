import React from 'react';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import store from '../../state/store';
import { renderWithIntl } from '../../../test/utils';
import { StyledTodoList, Container } from './TodoList';
import { TodoListItem } from '../todoListItem/TodoListItem';

// Mocking transition group https://github.com/reactjs/react-transition-group/issues/208
jest.mock('react-transition-group', () => {
  return {
    // eslint-disable-next-line react/prop-types
    CSSTransition: function CSSTransition({children}) {
      return (
        <div>{children}</div>
      );
    }
  };
});

const testTodos = {
  'test-id': {
    id: 'test-id',
    name: 'Test Todo',
    description: 'Pass all tests!',
    creationDate: '1581549548000'
  },
  'test-id-2': {
    id: 'test-id-2',
    name: 'Test Todo 2',
    description: 'Especially this test!',
    creationDate: '1581549548000'
  }
};

describe('TodoList', () => {
  it('renders the correct number of todos, matching the snapshot', () => {
    const tree = renderWithIntl(
      <Provider store={store}>
        <StyledTodoList todos={testTodos} />
      </Provider>
    );

    const todoItems = tree.root.findAllByType(TodoListItem);

    const testTodoValues = Object.values(testTodos);
    expect(todoItems.length).toBe(testTodoValues.length);

    todoItems.forEach((item, idx) => {
      expect(item.props.id).toBe(testTodoValues[idx].id);
      expect(item.props.name).toBe(testTodoValues[idx].name);
      expect(item.props.description).toBe(testTodoValues[idx].description);
      expect(item.props.creationDate).toBe(testTodoValues[idx].creationDate);
    });

    expect(tree).toMatchSnapshot();
  });
});

describe('container', () => {
  it('converts immutable todos into a js object', () => {
    const tree = renderWithIntl(
      <Provider store={store}>
        <Container todos={fromJS(testTodos)} />
      </Provider>
    );

    const styledTodoList = tree.root.findByType(StyledTodoList);
    expect(styledTodoList.props.todos).toEqual(testTodos);
  });
});
