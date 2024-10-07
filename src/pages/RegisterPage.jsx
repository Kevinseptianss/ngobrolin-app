import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {asyncSetRegister} from '../states/register/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register = null,
  } = useSelector((states) => states);

  useEffect(() => {
    if (register !== null) {
      console.log('navigate');
      navigate('/login');
      window.location.reload;
    }
  }, [register, navigate]);


  const onRegister = ({name, email, password}) => {
    console.log(name + ' ' + email + ' ' + password);
    dispatch(asyncSetRegister({name, email, password}));
  };

  return (
    <div className="login-page">
      <RegisterInput register={onRegister} />
    </div>
  );
}

export default RegisterPage;
