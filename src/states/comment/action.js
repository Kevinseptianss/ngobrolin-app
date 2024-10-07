import {hideLoading, showLoading} from 'react-redux-loading-bar';
import api from '../../utils/api';
import {asyncGetThreadDetail} from '../threadDetail/action';

const ActionType = {
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  RESET_COMMENT: 'RESET_COMMENT',
};

function receiveCommentActionCreator(comment) {
  return {
    type: ActionType.RECEIVE_COMMENT,
    payload: {
      comment,
    },
  };
}

function resetCommentActionCreator() {
  return {
    type: ActionType.RESET_COMMENT,
  };
}

function asyncSendComment({threadId, content}) {
  return async (dispatch) => {
    showLoading();
    const comment = await api.createComment({threadId, content});
    console.log(JSON.stringify(comment, null, 2));
    dispatch(receiveCommentActionCreator(comment));
    dispatch(asyncGetThreadDetail(threadId));
    hideLoading();
  };
}


export {
  ActionType,
  receiveCommentActionCreator,
  resetCommentActionCreator,
  asyncSendComment,
};
