import { ActionTypes } from '../actions';

const AuthReducer = (
  state = {
    authenticated: false,
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return Object.assign({}, state, { authenticated: true, id: action.payload });
    default:
      return state;
  }
};

export default AuthReducer;
