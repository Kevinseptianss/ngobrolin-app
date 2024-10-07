import React from 'react';
import PropTypes from 'prop-types';

function LeaderBoardItem({user, score}) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item-img">
        <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} />
      </div>
      <p>{user.name}</p>
      <p>{score}</p>
    </div>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.object,
  score: PropTypes.number,
};

export default LeaderBoardItem;
