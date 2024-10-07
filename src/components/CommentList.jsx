import React from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

function CommentList({comments}) {
  const commentsList = comments ?? [];
  return (
    <div className="comment-list">
      {commentsList.map((item) => <CommentItem key={item.id} {...item} />)}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.any),
};

export default CommentList;
