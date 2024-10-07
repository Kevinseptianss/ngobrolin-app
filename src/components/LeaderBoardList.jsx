import React from 'react';
import LeaderBoardItem from './LeaderBoardItem';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {asyncGetLeaderBoards} from '../states/leaderboards/action';

function LeaderBoardList() {
  const leaderboards = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderBoards());
  }, [dispatch]);

  return (
    <div className="leaderboard-list">
      {leaderboards && leaderboards.map((item) => (<LeaderBoardItem key={item.user.id} {...item} />))}
    </div>
  );
}

export default LeaderBoardList;
