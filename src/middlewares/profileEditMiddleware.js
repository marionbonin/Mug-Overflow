import api from './api';

import {
  SAVE_USER_EDIT,
  GET_USER_DATA,
  UPDATE_PASSWORD,
  DELETE_ACCOUNT,
  getUserData,
  saveUserData,
  cleanState,
  displayError,
} from '../actions/user';

const profileEditMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_USER_EDIT:
      api.put(
        '/profil/update',
        {
          email: store.getState().user.email,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
          status: store.getState().user.status.id,
          promo: store.getState().user.promo.id,
        },
      )
        .then((response) => {
          const tokenStorage = response.data[1];
          const tokenValue = tokenStorage.token;
          // editing api headers config
          localStorage.removeItem('token');
          api.defaults.headers.common.Authorization = `bearer ${tokenValue}`;
          // getting user info related to token stored in state
          localStorage.setItem('token', tokenValue);
          store.dispatch(getUserData());
        })

        .catch((error) => {
          console.log(error);
        });
      break;

    case UPDATE_PASSWORD:
      api.put(
        '/profil/password',
        {
          currentPassword: store.getState().user.currentPassword,
          newPassword: store.getState().user.password,
          checkPassword: store.getState().user.checkPassword,
        },
      )
        .then((response) => {
          console.log(response);
          console.log('password updaté');
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

    case DELETE_ACCOUNT:
      api.post(
        '/profil/delete',
        {
          currentPassword: store.getState().user.currentPassword,
        },
      )
        .then((response) => {
          console.log(response);
          localStorage.removeItem('token');
          store.dispatch(cleanState());
          console.log(api.defaults.headers.common.Authorization);
          api.defaults.headers.common.Authorization = '';
          console.log(api.defaults.headers.common.Authorization);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(displayError());
        });
      break;

    default:
  }
  next(action);
};

export default profileEditMiddleware;
