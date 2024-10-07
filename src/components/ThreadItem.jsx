import React from 'react';
import {postedAt} from '../utils/data-local';
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {asyncGetUsers} from '../states/users/action';
import {useEffect} from 'react';

function ThreadItem({id, title, body, totalComments, createdAt, ownerId}) {
  const date = postedAt(createdAt);
  const bodyShort = body.substring(0, 150) + '...';
  const dispatch = useDispatch();
  useEffect(() => {
    function handleUsers() {
      dispatch(asyncGetUsers());
    }
    handleUsers();
  }, [dispatch]);

  const users = useSelector((state) => state.users);
  const filteredUsers = users?.filter((item) => item.id === ownerId);
  const names = filteredUsers?.map((item) => item.name);

  return (
    <div className="thread-item">
      <Link to={`/thread/${id}`}>
        <div className="thread-side1">
          <div className="thread-item-title">{title}</div>
          <div className="thread-item-body" dangerouslySetInnerHTML={{__html: bodyShort}}></div>
          <div className="thread-item-footer">
            <div className="thread-item-footer-comment">{totalComments} Komentar</div>
            <div className="thread-item-footer-date">{date}</div>
            <div className="thread-item-footer-author">Dibuat oleh <b>{names}</b></div>
          </div>
        </div>
      </Link>
      <div className="thread-side2">
        <FaAngleUp />
        <div>0</div>
        <FaAngleDown />
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  totalComments: PropTypes.number,
  createdAt: PropTypes.string,
  ownerId: PropTypes.string,
};

export default ThreadItem;
