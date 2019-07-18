import { combineReducers } from 'redux';

import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
