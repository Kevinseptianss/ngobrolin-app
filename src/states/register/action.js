import api from '../../utils/api';

const ActionType = {
  SET_REGISTER: 'SET_REGISTER',
};

function setRegisterActionCreator(authUser) {
  return {
    type: ActionType.SET_REGISTER,
    payload: {
      authUser,
    },
  };
}

function asyncSetRegister({ name, email, password }) {
  return async (dispatch) => {
    try {
      const register = await api.register({ name, email, password });
      dispatch(setRegisterActionCreator(register));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setRegisterActionCreator,
  asyncSetRegister,
};
