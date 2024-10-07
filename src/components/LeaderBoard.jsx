import React from 'react';
import LeaderBoardList from './LeaderBoardList';

function LeaderBoard() {
  return (
    <div className="leaderboard">
      <h1>10 Pengguna Aktif</h1>
      <LeaderBoardList />
    </div>
  );
}

export default LeaderBoard;
