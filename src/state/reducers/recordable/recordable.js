import { List, fromJS, is } from 'immutable';
import { BACK, FORWARD, CLEAR_RECORDING, TOGGLE_RECORDING } from './recordableActions';

export default function recordable(reducer) {
  const initialState = fromJS({
    past: [],
    present: reducer(undefined, {}),
    future: [],
    recordingEnabled: true
  });

  return function(state = initialState, action) {
    const past = state.get('past');
    const present = state.get('present');
    const future = state.get('future');

    switch(action.type) {
    case BACK: {
      if (past.size !== 0) {
        const previousState = past.last();
        const newPast = past.pop();

        return state.withMutations(currentState =>
          currentState
            .set('past', newPast)
            .set('present', previousState)
            .update('future', previousFuture =>
              previousFuture.insert(0, present)
            )
        );
      }
      // There is no state in the past, set initial reducer state
      return state.set('present', reducer(undefined, {}));
    }
    case FORWARD: {
      if (future.size !== 0) {
        const nextState = future.first();
        const newFuture = future.shift();

        return state.withMutations(currentState =>
          currentState
            .update('past', previousPast => previousPast.push(present))
            .set('present', nextState)
            .set('future', newFuture)
        );
      }
      // There is no state in the future, we can't go there!
      return state;
    }
    case CLEAR_RECORDING: {
      return state.withMutations(currentState =>
        currentState
          .set('past', List())
          .set('future', List())
      );
    }
    case TOGGLE_RECORDING: {
      return state.set('recordingEnabled', !state.get('recordingEnabled'));
    }
    default: {
      // This action isn't a recording control action, pass to wrapper reducer
      const newPresent = reducer(present, action);

      if (is(newPresent, present)) {
        // If newPresent is equal to present it isn't necessary to update state
        return state;
      }

      let newState = state;

      if (state.get('recordingEnabled')) {
        newState = newState
          .update('past', previousPast => previousPast.push(present));
      }

      return newState.withMutations(currentstate =>
        currentstate
          .set('present', newPresent)
          .set('future', List())
      );
    }
    }
  };
}
