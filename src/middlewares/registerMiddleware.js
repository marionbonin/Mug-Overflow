import api from './api';

import {
  CREATE_USER_ACCOUNT,
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

    case CREATE_USER_ACCOUNT:
      api.post(
        '/register',
        {
          email: store.getState().user.email,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
          password: store.getState().user.password,
          checkPassword: store.getState().user.checkPassword,
          status: store.getState().user.status,
          promo: store.getState().user.promo,
        },
      )
        .then((response) => {
          console.log(response);
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
