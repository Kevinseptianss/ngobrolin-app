import React from 'react';
import CreateCommentInput from './CreateCommentInput';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {asyncSendComment} from '../states/comment/action';
import PropTypes from 'prop-types';

function CreateComment({threadId}) {
  const authUser = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const handleComment = ({content}) => {
    dispatch(asyncSendComment({threadId, content}));
  };

  if (authUser === null) {
    return <div>Masuk terlebih dahulu, <Link to={'/'}>masuk di sini</Link></div>;
  }
  return (
    <div className="comment">
      <CreateCommentInput handleComment={handleComment} />
    </div>
  );
}

CreateComment.propTypes = {
  threadId: PropTypes.string,
};

export default CreateComment;
