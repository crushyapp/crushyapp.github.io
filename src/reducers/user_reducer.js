import Immutable from 'immutable';
import { ActionTypes } from '../actions';

const UserReducer = (
  state = {
    user_data: Immutable.Map(),
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default UserReducer;
