import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD: 'RECEIVE_THREAD',
  RESET_THREAD: 'RESET_THREAD',
};

function receiveThreadActionCreator(thread) {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      thread,
    },
  };
}

function resetThreadActionCreator() {
  return {
    type: ActionType.RESET_THREAD,
  };
}

function asyncSendThreads({title, category, body}) {
  return async (dispatch) => {
    const thread = await api.createThread({title, category, body});
    console.log(JSON.stringify(thread, null, 2));
    dispatch(receiveThreadActionCreator(thread));
    return thread;
  };
}


export {
  ActionType,
  receiveThreadActionCreator,
  resetThreadActionCreator,
  asyncSendThreads,
};
