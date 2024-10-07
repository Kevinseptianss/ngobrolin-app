import React from 'react';
import ThreadItem from './ThreadItem';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {asyncGetThreads} from '../states/threads/action';

function ThreadList() {
  const threads = useSelector((state) => state.threads);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetThreads());
  }, [dispatch]);

  return (
    <div className="thread-wrapper">
      <h1>Diskusi Terbaru</h1>
      <div className="thread-list">
        {threads && threads.map((item) => (<ThreadItem key={item.id} {...item} />))}
      </div>
    </div>

  );
}

export default ThreadList;
