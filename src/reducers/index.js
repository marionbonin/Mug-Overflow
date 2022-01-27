import { combineReducers } from 'redux';

// import recipesReducer from './category';
import userReducer from './user';

const rootReducer = combineReducers({
  // recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
