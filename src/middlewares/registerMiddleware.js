import api from './api';

import {
  CREATE_USER_ACCOUNT,
  FETCH_PROMO_NAMES,
  FETCH_STATUS_NAMES,
  GET_USER_DATA,
  getUserData,
  saveUserData,
  savePromoNames,
  saveStatusNames,
  cleanState,
} from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROMO_NAMES:
      api.get(
        '/promos',
      )
        .then((response) => {
          console.log(response.data);
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
          // editing api headers config
          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          // getting user info related to token stored in state
          localStorage.setItem('token', response.data.token);
          store.dispatch(getUserData());
        })

        .catch((error) => {
          console.log(error);
        });
      break;

    case GET_USER_DATA:
      api.get(
        '/profil',
      )
        .then((response) => {
          // console.log(response);
          // console.log(response.data.email);
          store.dispatch(saveUserData(
            response.data.email,
            response.data.firstname,
            response.data.lastname,
            response.data.promo,
            response.data.status,
            response.data.role,
          ));
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
