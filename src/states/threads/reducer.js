import {ActionType} from './action';

function threadsReducer(threads = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    default:
      return threads;
  }
}

export default threadsReducer;
