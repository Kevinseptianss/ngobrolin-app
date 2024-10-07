import api from '../../utils/api';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderBoardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetLeaderBoards() {
  return async (dispatch) => {
    dispatch(showLoading());
    console.log('Loading Bar');
    try {
      const leaderboards = await api.getAllLeaderBoards();
      dispatch(receiveLeaderBoardsActionCreator(leaderboards));
    } catch (error) {
      console.error(error);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveLeaderBoardsActionCreator,
  asyncGetLeaderBoards,
};
