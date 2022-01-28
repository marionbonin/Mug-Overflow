import axios from 'axios';
import { SUBMIT_LOGIN, SAVE_USER_DATA } from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_LOGIN) {
    console.log('form submitted');
    console.log(store.getState().user.email);
    console.log(store.getState().user.password);

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
        // store.dispatch(saveUserData(response.data.pseudo));
        // Axios get ici?
      })

      .catch((error) => {
        console.log(error);
      });
  }
  next(action);
};

export default loginMiddleware;
