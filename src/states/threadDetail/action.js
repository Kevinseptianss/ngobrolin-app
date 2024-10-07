import api from '../../utils/api';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_THREADDETAIL: 'RECEIVE_THREADDETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREADDETAIL,
    payload: {
      threadDetail,
    },
  };
}

function asyncGetThreadDetail(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(id);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      console.error(error);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncGetThreadDetail,
};
