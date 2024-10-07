import React from 'react';
import {useEffect} from 'react';
import LoginInput from '../components/LoginInput';
import {useDispatch, useSelector} from 'react-redux';
import {asyncSetAuthUser} from '../states/isAuth/action';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    authUser = null,
  } = useSelector((states) => states);

  useEffect(() => {
    if (authUser !== null) {
      console.log('navigate');
      navigate('/');
      window.location.reload;
    }
  }, [authUser, navigate]);


  const onLogin = ({email, password}) => {
    dispatch(asyncSetAuthUser({email, password}));
  };


  return (
    <div className="login-page">
      <LoginInput login={onLogin} />
    </div>
  );
}

export default LoginPage;
