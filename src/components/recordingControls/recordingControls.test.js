import React from 'react';
import { renderWithIntl } from '../../../test/utils';
import { StyledRecordingControls } from './RecordingControls';
import 'jest-styled-components';

const defaultProps = {
  recordingEnabled: true,
  disableForward: true,
  disableClear: true,
  onToggleRecording: jest.fn(),
  onClearRecording: jest.fn(),
  onBack: jest.fn(),
  onForward: jest.fn()
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('RecordingControls', () => {
  it('renders StyledRecordingControls matching the snapshot when recording is enabled', () => {
    const tree = renderWithIntl(<StyledRecordingControls {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders StyledRecordingControls matching the snapshot when recording is disabled', () => {
    const props = {
      ...defaultProps,
      recordingEnabled: false
    };
    const tree = renderWithIntl(<StyledRecordingControls {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('passes the correct props to the toggle button', () => {
    const tree = renderWithIntl(<StyledRecordingControls {...defaultProps} />);

    const toggleButton = tree.root.findByProps({id: 'toggle-recording'});

    toggleButton.props.onClick();
    expect(defaultProps.onToggleRecording).toHaveBeenCalled();
  });

  it('passes the correct props to the clear button', () => {
    const props = {
      ...defaultProps,
      disableClear: false
    };
    const tree = renderWithIntl(<StyledRecordingControls {...props} />);

    const clearButton = tree.root.findByProps({id: 'clear'});

    expect(clearButton.props.disabled).toBeFalsy();

    clearButton.props.onClick();
    expect(defaultProps.onClearRecording).toHaveBeenCalled();
  });

  it('passes the correct props to the undo button', () => {
    const tree = renderWithIntl(<StyledRecordingControls {...defaultProps} />);

    const undoButton = tree.root.findByProps({id: 'undo'});

    undoButton.props.onClick();
    expect(defaultProps.onBack).toHaveBeenCalled();
  });

  it('passes the correct props to the redo button', () => {
    const props = {
      ...defaultProps,
      disableForward: false
    };
    const tree = renderWithIntl(<StyledRecordingControls {...props} />);

    const redoButton = tree.root.findByProps({id: 'redo'});

    expect(redoButton.props.disabled).toBeFalsy();

    redoButton.props.onClick();
    expect(defaultProps.onForward).toHaveBeenCalled();
  });
});
