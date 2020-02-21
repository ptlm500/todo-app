import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Name from './Name';
import InlineEditable from '../../inline-editable';
import 'jest-styled-components';

const defaultProps = {
  name: 'Test name',
  updateName: jest.fn(),
  className: 'test-class'
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Name', () => {
  it('renders a Name', () => {
    let tree;
    act(() => {
      tree = renderer.create(<Name {...defaultProps}/>);
    });

    const inlineEditable = tree.root.findByType(InlineEditable);
    expect(inlineEditable.props.value).toBe(defaultProps.name);
    expect(inlineEditable.props.placeholder).toBe(' ');

    const newName = 'New name';

    inlineEditable.props.onSubmit(newName);
    expect(defaultProps.updateName).toHaveBeenCalledWith(newName);

    expect(tree).toMatchSnapshot();
  });

  it('updates internal state correctly', () => {
    let tree;
    act(() => {
      tree = renderer.create(<Name {...defaultProps}/>);
    });

    const inlineEditable = tree.root.findByType(InlineEditable);
    const input = inlineEditable.props.children;

    // Test internal state updates
    const editedName = 'Test name edit';
    act(() => {
      input.props.onChange({target: {value: editedName}});
    });

    expect(inlineEditable.props.value).toBe(editedName);

    // Test props override internal state updates
    const newProps = {
      ...defaultProps,
      name: 'New name'
    };

    act(() => {
      tree.update(<Name {...newProps}/>);
    });

    expect(inlineEditable.props.value).toBe(newProps.name);
  });
});
