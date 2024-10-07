/**
 * @TODO: Define the reducer for the authUser state
 */
import {ActionType} from './action';
function registerReducer(register = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_REGISTER:
      return action.payload.authUser;
    default:
      return register;
  }
}

export default registerReducer;
