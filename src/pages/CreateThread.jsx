import React from 'react';
import CreateThreadInput from '../components/CreateThreadInput';
import {useDispatch, useSelector} from 'react-redux';
import {asyncSendThreads, resetThreadActionCreator} from '../states/thread/action';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function CreateThread() {
  const thread = useSelector((state) => state.thread);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const threadd = ({title, category, body}) => {
    dispatch(asyncSendThreads({title, category, body}));
  };
  console.log(thread);
  useEffect(() => {
    if (thread !== null) {
      dispatch(resetThreadActionCreator());
      window.location.reload;
      navigate('/');
    }
  });
  return (
    <div className="container-create-thread">
      <CreateThreadInput threadd={threadd} />
    </div>
  );
}

export default CreateThread;
