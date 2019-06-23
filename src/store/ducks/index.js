// Imports
import { combineReducers } from 'redux';

// Reducers
import dashboard from './dashboard';
import user from './user';

// Combine
export default combineReducers({
  dashboard,
  user,
});
