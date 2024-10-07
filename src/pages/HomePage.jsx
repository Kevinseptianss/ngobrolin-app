import React from 'react';
import ThreadList from '../components/ThreadList';
import LeaderBoard from '../components/LeaderBoard';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-wrapper">
        <ThreadList />
        <LeaderBoard />
      </div>
    </div>
  );
}

export default HomePage;
