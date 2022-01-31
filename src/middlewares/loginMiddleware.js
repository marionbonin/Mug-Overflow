import axios from 'axios';
import { 
  SUBMIT_LOGIN, 
  // SAVE_TOKEN,
  saveToken,
  GET_USER_DATA,
  getUserData,
} from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
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
          // Récupérer le pseudo dans la réponse et le stocker  dnas le state
          // => pour modifier le state, il faut dispatch une action
          store.dispatch(saveToken(response.data.token));
          store.dispatch(getUserData());
        })

        .catch((error) => {
          console.log(error);
        });
      break;

    case GET_USER_DATA:

      axios.get(
        'http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/api/profil',
        {
          token: store.getState().user.token,
        },
      )
        .then((response) => {        
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
  }
  next(action);
};

export default loginMiddleware;
