import React from 'react';
import { act } from 'react-test-renderer';
import { renderWithIntl } from '../../../test/utils';
import { TodoListItem } from './TodoListItem';
import IconButton from '../iconButton';
import Name from './name';
import Description from './Description';

const defaultProps = {
  id: 'test-id',
  name: 'Test name',
  description: 'test description',
  creationDate: '1582043913000',
  onRemove: jest.fn(),
  onUpdate: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('TodoListItem', () => {
  it('renders a todoListItem matching the snapshot', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<TodoListItem {...defaultProps}/>);
    });

    expect(tree).toMatchSnapshot();
  });

  it('calls onRemove when the remove button is clicked', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<TodoListItem {...defaultProps}/>);
    });

    const removeButton = tree.root.findByType(IconButton);
    removeButton.props.onClick();

    expect(defaultProps.onRemove).toHaveBeenCalledWith(defaultProps.id);
  });

  it('calls onUpdate correctly for the Name component', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<TodoListItem {...defaultProps}/>);
    });

    const name = tree.root.findByType(Name);

    act(() => {
      name.props.updateName(defaultProps.name);
    });
    // name is equal, so we shouldn't be trying to update
    expect(defaultProps.onUpdate).toHaveBeenCalledTimes(0);

    const newName = 'New name';
    act(() => {
      name.props.updateName(newName);
    });
    // new name, so we should update
    expect(defaultProps.onUpdate).toHaveBeenCalledWith({
      id: defaultProps.id,
      name: newName
    });
  });

  it('calls onUpdate correctly for the Description component', () => {
    let tree;
    act(() => {
      tree = renderWithIntl(<TodoListItem {...defaultProps}/>);
    });

    const description = tree.root.findByType(Description);

    act(() => {
      description.props.updateDescription(defaultProps.description);
    });
    // description is equal, so we shouldn't be trying to update
    expect(defaultProps.onUpdate).toHaveBeenCalledTimes(0);

    const newDescription = 'New description';
    act(() => {
      description.props.updateDescription(newDescription);
    });
    // new description, so we should update
    expect(defaultProps.onUpdate).toHaveBeenCalledWith({
      id: defaultProps.id,
      description: newDescription
    });
  });
});
