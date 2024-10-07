import React from 'react';
import {Link} from 'react-router-dom';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Button from './styled/Button';

function LoginInput({login}) {
  const [email, useEmail] = useInput('');
  const [password, usePassword] = useInput('');
  return (
    <div className="login-input">
      <h1>Selamat datang silahkan masuk!</h1>
      <input type="text" placeholder="Email" onChange={useEmail}/>
      <input type="password" placeholder="Password" onChange={usePassword}/>
      <Button onClick={() => login({email, password})}>Masuk</Button>
      <p>Belum mendaftar silahkan daftar <Link to={'/register'}>di sini</Link></p>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func,
};

export default LoginInput;
