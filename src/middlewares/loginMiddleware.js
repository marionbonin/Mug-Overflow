import axios from 'axios';

import { 
  SUBMIT_LOGIN, 
  // SAVE_TOKEN,
  // saveToken,
  GET_USER_DATA,
  getUserData,
  saveUserData,
} from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  const api = axios.create({
    baseURL: 'http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/api/',
  });
  
  switch (action.type) {
    case SUBMIT_LOGIN:

      axios.post(
        'http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/api/login_check',
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {        
          console.log(response);
          console.log(response.data.token);
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

      axios.get(
        // First parameter : URL
        'http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/api/profil',
        // Second parameter : JSON Body to send
        {
          token: localStorage.getItem('token'),
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`
          },
        },
      )
        .then((response) => {        
          console.log(response);
          console.log(response.data.email);
          store.dispatch(saveUserData(
            response.data.email,
            response.data.firstname,
            response.data.lastname,
            response.data.promo,
            response.data.status,
            response.data.role
          ));
          console.log(store.getState().user.email);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
  }
  next(action);
};

export default loginMiddleware;
