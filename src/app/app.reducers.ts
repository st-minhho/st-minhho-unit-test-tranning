import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import usersReducer from './pages/users/users.reducers';
const appReducer = combineReducers({
  authReducer,
  usersReducer
});

export default appReducer;
