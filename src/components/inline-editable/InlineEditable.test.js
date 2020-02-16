import React from 'react';
import renderer, { act } from 'react-test-renderer';
import InlineEditable from './InlineEditable';

const mockFocus = jest.fn();
const mockOnSubmit = jest.fn();

const defaultProps = {
  value: 'test value',
  placeholder: 'test placeholder',
  onSubmit: mockOnSubmit
};

function testRender(props = defaultProps, children) {
  let tree;

  act(() => {
    tree = renderer.create(
      <InlineEditable {...props}>
        {children ? children : <input />}
      </InlineEditable>,
      {
        createNodeMock: element =>
          element.type === 'input' && {
            focus: mockFocus
          }
      }
    );
  });

  return tree;
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('InlineEditable', () => {
  it('throws an error when multiple child components are passed to it', () => {
    expect.assertions(1);
    try {
      act(() =>
        renderer.create(
          <InlineEditable>
            <input/>
            <input/>
          </InlineEditable>
        )
      );
    } catch (e) {
      expect(e.message).toMatchSnapshot();
    }
  });

  it('renders a value when provided', () => {
    expect(testRender()).toMatchSnapshot();
  });

  it('sets a className on the outer div when provided', () => {
    const props = {
      className: 'test-class',
      ...defaultProps
    };

    expect(testRender(props)).toMatchSnapshot();
  })

  it('renders a placeholder when no value is provided', () => {
    expect(testRender({placeholder: 'test placeholder'})).toMatchSnapshot();
  });

  it('renders a message to provide a placeholder when no value or placeholder is provided', () => {
    expect(testRender({})).toMatchSnapshot();
  });

  describe('edit mode', () => {
    function enterEditMode(testRenderer) {
      const editTrigger = testRenderer.root
        .findByProps({className: 'inline-editable__edit-trigger'});

      act(() => editTrigger.props.onClick());
    }

    it('triggers when the edit-trigger is clicked', () => {
      const tree = testRender();

      enterEditMode(tree);

      expect(mockFocus).toHaveBeenCalledTimes(1);

      const input = tree.root.findByType('input');

      expect(input.props.value).toBe(defaultProps.value);
      expect(input.props.placeholder).toBe(defaultProps.placeholder);

      expect(tree).toMatchSnapshot();
    });

    it('exits when onBlur of the editContainer is called, calling onSubmit', () => {
      const tree = testRender();

      enterEditMode(tree);

      const editContainer = tree.root
        .findByProps({className: 'inline-editable__edit-container'});

      act(() => editContainer.props.onBlur());

      expect(mockOnSubmit).toHaveBeenCalledWith(defaultProps.value);

      expect(tree).toMatchSnapshot();
    });

    it('ignores non-escape key presses inside the editContainer', () => {
      const tree = testRender();

      enterEditMode(tree);

      const editContainer = tree.root
        .findByProps({className: 'inline-editable__edit-container'});

      act(() => editContainer.props.onKeyDown({key: 'Enter'}));

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);

      expect(tree).toMatchSnapshot();
    });

    it('exits when the Escape key is pressed inside the editContainer, calling onSubmit', () => {
      const tree = testRender();

      enterEditMode(tree);

      const editContainer = tree.root
        .findByProps({className: 'inline-editable__edit-container'});

      act(() => editContainer.props.onKeyDown({key: 'Escape'}));

      expect(mockOnSubmit).toHaveBeenCalledWith(defaultProps.value);

      expect(tree).toMatchSnapshot();
    });
  });
});

