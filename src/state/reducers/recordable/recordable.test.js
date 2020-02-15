import { fromJS } from 'immutable';
import recordable from './recordable';
import { CLEAR_RECORDING, BACK, FORWARD, TOGGLE_RECORDING } from './recordableActions';

const mockReducer = jest.fn(() => 'wrapped-reducer-state');
let reducerWithRecordable;

beforeEach(() => {
  jest.clearAllMocks();
  reducerWithRecordable = recordable(mockReducer);
});

describe('recordable', () => {
  const testState = fromJS({
    past: [0, 1],
    present: 2,
    future: [3],
    recordingEnabled: true
  });

  it('calls the mockReducer with undefined and {} to get initial present state', () => {
    expect(mockReducer).toHaveBeenCalledWith(undefined, {});
  });

  it('sets the initial state correctly', () => {
    const expectedState = fromJS({
      past: [],
      present: 'wrapped-reducer-state',
      future: [],
      recordingEnabled: true
    });

    expect(reducerWithRecordable(undefined, {})).toEqual(expectedState);
  });

  it('doesn\'t update past and future when new present is equal to present', () => {
    const expectedState = fromJS({
      past: [0, 1],
      present: 'wrapped-reducer-state',
      future: [3],
      recordingEnabled: true
    });

    expect(reducerWithRecordable(testState.set('present', mockReducer()), {}))
      .toEqual(expectedState);
  });

  it('sets previous present value into past and clears future when a non-recordable action is passed', () => {
    const expectedState = fromJS({
      past: [0, 1, 2],
      present: 'wrapped-reducer-state',
      future: [],
      recordingEnabled: true
    });

    expect(reducerWithRecordable(testState, {type: 'SOME_ACTION'}))
      .toEqual(expectedState);
  });

  it('doesn\'t set previous present value into past when a non-recordable action is passed and recordingEnabled is false', () => {
    const expectedState = fromJS({
      past: [0, 1],
      present: 'wrapped-reducer-state',
      future: [],
      recordingEnabled: false
    });

    expect(reducerWithRecordable(testState.set('recordingEnabled', false), {type: 'SOME_ACTION'}))
      .toEqual(expectedState);
  });

  it('updates the state correctly when a BACK action is passed', () => {
    const expectedState = fromJS({
      past: [0],
      present: 1,
      future: [2, 3],
      recordingEnabled: true
    });

    expect(reducerWithRecordable(testState, {type: BACK}))
      .toEqual(expectedState);
  });

  it('updates the state correctly when a FORWARD action is passed', () => {
    const expectedState = fromJS({
      past: [0, 1, 2],
      present: 3,
      future: [],
      recordingEnabled: true
    });

    expect(reducerWithRecordable(testState, {type: FORWARD}))
      .toEqual(expectedState);
  });

  it('clears the past and future when a CLEAR_RECORDING action is passed', () => {
    const expectedState = fromJS({
      past: [],
      present: 2,
      future: [],
      recordingEnabled: true
    });

    expect(reducerWithRecordable(testState, {type: CLEAR_RECORDING}))
      .toEqual(expectedState);
  });

  it('toggles recordingEnabled when a TOGGLE_RECORDING action is passed', () => {
    let recordingEnabled = reducerWithRecordable(
      undefined,
      {type: TOGGLE_RECORDING}
    ).get('recordingEnabled');
    expect(recordingEnabled).toBeFalsy();

    recordingEnabled = reducerWithRecordable(
      fromJS({recordingEnabled: false}),
      {type: TOGGLE_RECORDING}
    ).get('recordingEnabled');
    expect(recordingEnabled).toBeTruthy();
  });
});
