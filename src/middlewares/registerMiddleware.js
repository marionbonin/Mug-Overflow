import api from './api';

import {
  FETCH_PROMO_NAMES,
  FETCH_STATUS_NAMES,
  savePromoNames,
  saveStatusNames,
} from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROMO_NAMES:
      api.get(
        '/promos',
      )
        .then((response) => {
          const promoNames = (response.data);
          store.dispatch(savePromoNames(promoNames));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_STATUS_NAMES:
      api.get(
        '/status',
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveStatusNames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default registerMiddleware;
