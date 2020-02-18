import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Description from './Description';
import InlineEditable from '../../inline-editable';

const defaultProps = {
  description: 'Test description',
  updateDescription: jest.fn(),
  className: 'test-class'
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Description', () => {
  it('renders a Description', () => {
    let tree;
    act(() => {
      tree = renderer.create(<Description {...defaultProps}/>);
    });

    const inlineEditable = tree.root.findByType(InlineEditable);
    expect(inlineEditable.props.value).toBe(defaultProps.description);
    expect(inlineEditable.props.placeholder).toBe(' ');

    const newDescription = 'New description';

    inlineEditable.props.onSubmit(newDescription);
    expect(defaultProps.updateDescription).toHaveBeenCalledWith(newDescription);

    expect(tree).toMatchSnapshot();
  });

  it('updates internal state correctly', () => {
    let tree;
    act(() => {
      tree = renderer.create(<Description {...defaultProps}/>);
    });

    const inlineEditable = tree.root.findByType(InlineEditable);
    const input = inlineEditable.props.children;

    // Test internal state updates
    const editedDescription = 'Test description edit';
    act(() => {
      input.props.onChange({target: {value: editedDescription}});
    });

    expect(inlineEditable.props.value).toBe(editedDescription);

    // Test props override internal state updates
    const newProps = {
      ...defaultProps,
      description: 'New description'
    };

    act(() => {
      tree.update(<Description {...newProps}/>);
    });

    expect(inlineEditable.props.value).toBe(newProps.description);
  });
});
