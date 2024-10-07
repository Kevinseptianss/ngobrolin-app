import React from 'react';
import {asyncUnsetAuthUser} from '../states/isAuth/action';
import {useDispatch, useSelector} from 'react-redux';

function UserDetail() {
  const {
    authUser = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
    window.location.href = '/login';
  };
  return (
    <div className="user-detail">
      <div className="user-wrapper">
        <img
          src={authUser.avatar}
          alt={authUser.name}
        />
      </div>
      <div className="user-wrapper2">
        <h1>{authUser.name}</h1>
        <h2>{authUser.email}</h2>
        <button onClick={handleLogout}>Keluar</button>
      </div>

    </div>
  );
}

export default UserDetail;
