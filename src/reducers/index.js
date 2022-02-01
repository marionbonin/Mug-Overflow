import { combineReducers } from 'redux';

// import recipesReducer from './category';
import userReducer from './user';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  // recipes: recipesReducer,
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducer;
