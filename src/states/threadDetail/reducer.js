import {ActionType} from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADDETAIL:
      return action.payload.threadDetail;
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
