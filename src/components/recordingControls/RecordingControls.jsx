import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  toggleRecording,
  clearRecording,
  back,
  forward
} from '../../state/actions/actions';
import { SecondaryButton } from '../button';
import Indicator from '../indicator/Indicator';
import { theme } from '../../styles';

function RecordingControls(props) {
  const {
    className,
    recordingEnabled,
    disableForward,
    disableClear,
    onToggleRecording,
    onClearRecording,
    onBack,
    onForward
  } = props;

  return (
    <div className={className}>
      <Indicator pulsing fill={theme.red} disabled={!recordingEnabled} />
      <SecondaryButton onClick={onToggleRecording}>
        {recordingEnabled ? 'Stop' : 'Start'}
      </SecondaryButton>
      <SecondaryButton danger onClick={onClearRecording} disabled={disableClear}>
        Clear
      </SecondaryButton>
      <SecondaryButton onClick={onBack}>
        Back
      </SecondaryButton>
      <SecondaryButton onClick={onForward} disabled={disableForward}>
        Forward
      </SecondaryButton>
    </div>
  );
}

export const StyledRecordingControls = styled(RecordingControls)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  left: 0;
  bottom: 0;
  background-color: ${theme.primaryDark};
  position: fixed;
  width: 100%;
  padding: 0.5rem 1rem;

  > * {
    margin: 0 0.5rem;

    &:first-child {
      margin: 0 1rem 0 0;
    }

    &:last-child {
      margin: 0 0 0 0.5rem;
    }
  }
`;

RecordingControls.propTypes = {
  className: PropTypes.string.isRequired,
  recordingEnabled: PropTypes.bool.isRequired,
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
)(StyledRecordingControls);
