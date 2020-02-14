import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import InlineEditable from './InlineEditable';

const mockFocus = jest.fn();
const mockOnSubmit = jest.fn();

const defaultProps = {
  value: 'test value',
  placeholder: 'test placeholder',
  onSubmit: mockOnSubmit
};

function testRender(props = defaultProps, children) {
  let renderer;

  act(() => {
    renderer = TestRenderer.create(
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

  return renderer;
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('InlineEditable', () => {
  it('throws an error when multiple child components are passed to it', () => {
    expect.assertions(1);
    try {
      act(() =>
        TestRenderer.create(
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
      const testRenderer = testRender();

      enterEditMode(testRenderer);

      expect(mockFocus).toHaveBeenCalledTimes(1);

      const input = testRenderer.root.findByType('input');

      expect(input.props.value).toBe(defaultProps.value);
      expect(input.props.placeholder).toBe(defaultProps.placeholder);

      expect(testRenderer).toMatchSnapshot();
    });

    it('exits when onBlur of the editContainer is called, calling onSubmit', () => {
      const testRenderer = testRender();

      enterEditMode(testRenderer);

      const editContainer = testRenderer.root
        .findByProps({className: 'inline-editable__edit-container'});

      act(() => editContainer.props.onBlur());

      expect(mockOnSubmit).toHaveBeenCalledWith(defaultProps.value);

      expect(testRenderer).toMatchSnapshot();
    });

    it('ignores non-escape key presses inside the editContainer', () => {
      const testRenderer = testRender();

      enterEditMode(testRenderer);

      const editContainer = testRenderer.root
        .findByProps({className: 'inline-editable__edit-container'});

      act(() => editContainer.props.onKeyDown({key: 'Enter'}));

      expect(mockOnSubmit).toHaveBeenCalledTimes(0);

      expect(testRenderer).toMatchSnapshot();
    });

    it('exits when the Escape key is pressed inside the editContainer, calling onSubmit', () => {
      const testRenderer = testRender();

      enterEditMode(testRenderer);

      const editContainer = testRenderer.root
        .findByProps({className: 'inline-editable__edit-container'});

      act(() => editContainer.props.onKeyDown({key: 'Escape'}));

      expect(mockOnSubmit).toHaveBeenCalledWith(defaultProps.value);

      expect(testRenderer).toMatchSnapshot();
    });
  });
});

