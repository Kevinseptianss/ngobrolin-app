import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function RegisterInput({register}) {
  const [name, useName] = useInput('');
  const [email, useEmail] = useInput('');
  const [password, usePassword] = useInput('');
  return (
    <div className="login-input">
      <h1>Silahkan isi data anda di bawah ini</h1>
      <input type="text" placeholder="Nama" onChange={useName}/>
      <input type="text" placeholder="Email" onChange={useEmail}/>
      <input type="password" placeholder="Password" onChange={usePassword}/>
      <button onClick={() => register({name, email, password})}>Daftar</button>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func,
};

export default RegisterInput;
