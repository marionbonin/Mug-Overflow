import { combineReducers } from 'redux';

import userReducer from './user';
import productsReducer from './products';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default rootReducer;
