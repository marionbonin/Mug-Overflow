import axios from 'axios';
import { UPDATE_LOGIN_FIELD, saveUserData } from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);

  // On réagit à une action SUBMIT_LOGIN en faisant appel à l'API

  /*
  if (action.type === UPDATE_LOGIN_FIELD) {
    axios.post(
      'http://localhost:3001/login',

      {
        email: store.getState().email,
        password: store.getState().password,
      },
    )
      .then((response) => {
        // console.log(response);

        // Récupérer le pseudo dans la réponse et le stocker  dnas le state
        // => pour modifier le state, il faut dispatch une action
        store.dispatch(saveUserData(response.data.pseudo));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // On passe l'action au suivant

  next(action);
  */
};

export default loginMiddleware;
