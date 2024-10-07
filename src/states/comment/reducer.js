import {ActionType} from './action';

function commentReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD:
      return action.payload.thread;
    case ActionType.RESET_THREAD:
      return null;
    default:
      return thread;
  }
}

export default commentReducer;
