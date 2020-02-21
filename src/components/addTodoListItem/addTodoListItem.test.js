import React from 'react';
import { act } from 'react-test-renderer';
import { renderWithIntl } from '../../../test/utils';
import { AddTodoListItem } from './AddTodoListItem';
import 'jest-styled-components';

// Mocking transition group https://github.com/reactjs/react-transition-group/issues/208
jest.mock('react-transition-group', () => {
  /* eslint-disable react/prop-types */
  return {
    CSSTransition: function CSSTransition(props) {
      return (
        <div
          id="CSSTransition"
          {...props}
        >
          {props.children}
        </div>
      );
    }
  };
  /* eslint-enable react/prop-types */
});

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 'test-uuid')
  };
});

const defaultProps = {
  onAddTodo: jest.fn()
};

const realNow = Date.now;

beforeAll(() => {
  global.Date.now = jest.fn(() => 1582069219000);
});

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  global.Date.now = realNow;
});

describe('AddTodoListItem', () => {
  it('matches the snapshot', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<AddTodoListItem {...defaultProps} />);
    });

    expect(tree).toMatchSnapshot();
  });

  it('hides the addItem button and displays the form when the addItem button is clicked', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<AddTodoListItem {...defaultProps} />);
    });

    const addItemButton = findAddItemButton(tree);
    const transitionGroup = findTransitionGroup(tree);

    act(() => {
      addItemButton.props.onClick();
    });

    expect(transitionGroup.props.appear).toBeTruthy();
  });

  it('updates the name in state on NameInput change', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<AddTodoListItem {...defaultProps} />);
    });

    const nameInput = findNameInput(tree);

    const testInput = 'test input';
    act(() => {
      nameInput.props.onChange({target: {value: testInput}});
    });

    expect(nameInput.props.value).toBe(testInput);
  });

  it('updates the name in state on DescriptionInput change', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<AddTodoListItem {...defaultProps} />);
    });

    const descriptionInput = findDescriptionInput(tree);

    const testInput = 'test input';
    act(() => {
      descriptionInput.props.onChange({target: {value: testInput}});
    });

    expect(descriptionInput.props.value).toBe(testInput);
  });

  it('hides the form and clears name and description when the cancel button is clicked', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<AddTodoListItem {...defaultProps} />);
    });

    const addItemButton = findAddItemButton(tree);
    const cancelButton = findCancelButton(tree);
    const transitionGroup = findTransitionGroup(tree);
    const nameInput = findNameInput(tree);
    const descriptionInput = findDescriptionInput(tree);

    act(() => {
      addItemButton.props.onClick();
      nameInput.props.onChange({target: {value: 'test'}});
      descriptionInput.props.onChange({target: {value: 'test'}});
    });

    act(() => {
      cancelButton.props.onClick();
    });

    // Test form hidden
    expect(transitionGroup.props.in).toBeFalsy();
    // Test state is cleared
    expect(nameInput.props.value).toBe('');
    expect(descriptionInput.props.value).toBe('');
  });

  it('calls onAddTodo, hides the form and clears name and description when the add button is clicked', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<AddTodoListItem {...defaultProps} />);
    });

    const addItemButton = findAddItemButton(tree);
    const addButton = findAddButton(tree);
    const transitionGroup = findTransitionGroup(tree);
    const nameInput = findNameInput(tree);
    const descriptionInput = findDescriptionInput(tree);

    const testName = 'test name';
    const testDescription = 'test description';

    act(() => {
      addItemButton.props.onClick();
      nameInput.props.onChange({target: {value: testName}});
      descriptionInput.props.onChange({target: {value: testDescription}});
    });

    act(() => {
      addButton.props.onClick();
    });

    // Test onAddTodo call
    expect(defaultProps.onAddTodo).toHaveBeenCalledWith({
      id: 'test-uuid',
      name: testName,
      description: testDescription,
      creationDate: '1582069219000'
    });
    // Test form hidden
    expect(transitionGroup.props.in).toBeFalsy();
    // Test state is cleared
    expect(nameInput.props.value).toBe('');
    expect(descriptionInput.props.value).toBe('');
  });
});

function findAddItemButton(tree) {
  return tree.root.findByProps({id: 'add-item'});
}

function findTransitionGroup(tree) {
  return tree.root.findByProps({id: 'CSSTransition'});
}

function findNameInput(tree) {
  return tree.root.findByProps({id: 'name-input'});
}

function findDescriptionInput(tree) {
  return tree.root.findByProps({id: 'description-input'});
}

function findCancelButton(tree) {
  return tree.root.findByProps({id: 'cancel'});
}

function findAddButton(tree) {
  return tree.root.findByProps({id: 'add'});
}
