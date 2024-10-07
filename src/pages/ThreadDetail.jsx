import React from 'react';
import {useEffect, useState} from 'react';
import {asyncGetThreadDetail} from '../states/threadDetail/action';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {postedAt} from '../utils/data-local';
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import CommentList from '../components/CommentList';
import CreateComment from '../components/CreateComment';

function ThreadDetail() {
  const {id: threadId} = useParams();
  let threadDetail = useSelector((state) => state.threadDetail);
  const dispatch = useDispatch();


  if (!threadDetail) {
    threadDetail = {
      title: '',
      body: '',
      totalComments: '',
      createdAt: '',
      owner: [],
      comments: [],
    };
  }

  const [comments, setComments] = useState(threadDetail.comments);

  useEffect(() => {
    dispatch(asyncGetThreadDetail(threadId));
  }, [dispatch, threadId]);


  useEffect(() => {
    if (threadDetail && threadDetail.comments) {
      setComments(threadDetail.comments);
    }
  }, [threadDetail, threadDetail.comments]);

  useEffect(() => {
    if (threadDetail) {
      setComments(threadDetail.comments);
    }
  }, [threadDetail]);

  const date = postedAt(threadDetail.createdAt);
  const countComment = comments.length;

  return (
    <div className="thread-detail">
      <div className="thread-item">
        <div className="thread-side1">
          <div className="thread-item-title">{threadDetail.title}</div>
          <div className="thread-item-body" dangerouslySetInnerHTML={{__html: threadDetail.body}}></div>
          <div className="thread-item-footer">
            <div className="thread-item-footer-comment">{countComment} Komentar</div>
            <div className="thread-item-footer-date">{date}</div>
            <img src={threadDetail.owner.avatar}/>
            <div className="thread-item-footer-author">Dibuat oleh <b>{threadDetail.owner.name}</b></div>
          </div>
        </div>
        <div className="thread-side2">
          <FaAngleUp />
          <div>0</div>
          <FaAngleDown />
        </div>
      </div>
      <div className="thread-comments">
        <div className="thread-write-comment">
          <CreateComment threadId={threadId} />

        </div>
        <div className="thread-comment-list">
          <p>Komentar ({countComment})</p>
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default ThreadDetail;
