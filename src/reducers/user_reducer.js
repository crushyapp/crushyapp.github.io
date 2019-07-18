import { ActionTypes } from '../actions';

const UserReducer = (
  state = {
    profile_picture: '',
    crushes: [],
    matches: [],
    username: '',
    num_crushed_on_user: 0,
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return Object.assign({}, state, {
        profile_picture: action.payload.profile_picture,
        crushes: action.payload.my_crushes,
        matches: action.payload.list_of_matches,
        username: action.payload.username,
        num_crushed_on_user: action.payload.number_crushed_on_me,
      });
    default:
      return state;
  }
};

export default UserReducer;
