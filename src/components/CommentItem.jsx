import React from 'react';
import {postedAt} from '../utils/data-local';
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa6';
import PropTypes from 'prop-types';

function CommentItem({content, createdAt, owner, upVotesBy, downVotesBy}) {
  const dateNow = postedAt(createdAt);
  const voteUp = upVotesBy.length;
  const voteDown = downVotesBy.length;
  return (
    <div className="comment-item">
      <div className="comment-item-wrapper">
        <div className="comment-item-owner-info">
          <img
            src={`https://ui-avatars.com/api/?name=${owner.name}&background=random`}
            alt={owner.name}
          />
        </div>
        <div className="comment-item-details">
          <p><b>{owner.name}</b></p>
          <p dangerouslySetInnerHTML={{__html: content}}></p>

        </div>
      </div>
      <footer>
        <button type="button" className="comment-upvote-button">
          <FaThumbsUp />
          <span className="comment-upvote__label"> {voteUp}</span>
        </button>
        <button type="button" className="comment-downvote-button">
          <FaThumbsDown />
          <span className="comment-downvote__label"> {voteDown}</span>
        </button>
        <p className="posted-at">{dateNow}</p>
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
};

export default CommentItem;
