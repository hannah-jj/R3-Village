import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import boxesReducer from './boxesReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  boxes: boxesReducer
});

export default rootReducer;