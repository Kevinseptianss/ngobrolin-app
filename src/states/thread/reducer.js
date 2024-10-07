import {ActionType} from './action';

function threadReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD:
      return action.payload.thread;
    case ActionType.RESET_THREAD:
      return null;
    default:
      return thread;
  }
}

export default threadReducer;
