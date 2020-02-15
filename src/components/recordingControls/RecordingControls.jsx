import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleRecording,
  clearRecording,
  back,
  forward
} from '../../state/actions/actions';

export function RecordingControls(props) {
  const {
    recordingEnabled,
    disableBack,
    disableForward,
    disableClear,
    onToggleRecording,
    onClearRecording,
    onBack,
    onForward
  } = props;

  return (
    <div className='recording-controls'>
      <button onClick={onToggleRecording}>
        {recordingEnabled ? 'Stop' : 'Start'}
      </button>
      <button onClick={onBack} disabled={disableBack}>
        Back
      </button>
      <button onClick={onForward} disabled={disableForward}>
        Forward
      </button>
      <button onClick={onClearRecording} disabled={disableClear}>
        Clear
      </button>
    </div>
  );
}

RecordingControls.propTypes = {
  recordingEnabled: PropTypes.bool.isRequired,
  disableBack: PropTypes.bool,
  disableForward: PropTypes.bool,
  disableClear: PropTypes.bool,
  onToggleRecording: PropTypes.func.isRequired,
  onClearRecording: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const pastSize = state.todos.get('past').size;
  const futureSize = state.todos.get('future').size;

  return {
    recordingEnabled: state.todos.get('recordingEnabled'),
    disableBack: pastSize === 0,
    disableForward: futureSize === 0,
    disableClear: pastSize === 0 && futureSize === 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleRecording: () => dispatch(toggleRecording()),
    onClearRecording: () => dispatch(clearRecording()),
    onBack: () => dispatch(back()),
    onForward: () => dispatch(forward())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordingControls);
