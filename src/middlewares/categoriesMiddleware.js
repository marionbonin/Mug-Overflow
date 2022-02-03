import api from './api';

import {
  FETCH_CATEGORIES,
  saveCategories,
} from '../actions/categories';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      // API call to get the categories
      api.get('/categories')
        .then((response) => {
          const categories = response.data;
          // console.log('categories récupérées ok');
          // Dispatching the action getting the categories into the reducer
          // and adding them into the state
          store.dispatch(saveCategories(categories));
        })
        .catch((error) => {
          console.error(error);
        });

      break;
    default:
  }

  next(action);
};

export default categoriesMiddleware;
