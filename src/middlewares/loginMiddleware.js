// import { useNavigate } from 'react-router-dom';

import api from './api';

import {
  SUBMIT_LOGIN,
  GET_USER_DATA,
  getUserData,
  saveUserData,
} from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:

      api.post(
        '/login_check',
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // console.log(response);
          // console.log(response.data.token);
          // saving user token in store
          // store.dispatch(saveToken(response.data.token));
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
      if (!localStorage.getItem('token')) {
        console.log('notoken');
        break;
      }
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
          console.log(store.getState().user.email);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default loginMiddleware;
