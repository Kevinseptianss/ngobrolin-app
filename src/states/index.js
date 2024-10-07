import {configureStore} from '@reduxjs/toolkit';
import {loadingBarReducer} from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import threadReducer from './thread/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadDetailReducer from './threadDetail/reducer';
import authUserReducer from './isAuth/reducer';
import commentReducer from './comment/reducer';
import usersReducer from './users/reducer';
import registerReducer from './register/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    register: registerReducer,
    threads: threadsReducer,
    users: usersReducer,
    thread: threadReducer,
    comment: commentReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
