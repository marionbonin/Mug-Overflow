import api from './api';

import {
  FETCH_PRODUCTS,
  saveProducts,
} from '../actions/products';

const productsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      // API call to get the categories
      api.get('/products')
        .then((response) => {
          const products = response.data;
          // Dispatching the action getting the products into the reducer
          // and adding them into the state
          store.dispatch(saveProducts(products));
        })
        .catch((error) => {
          console.error(error);
        });

      break;
    default:
  }

  next(action);


export default productsMiddleware;
