import axios from 'axios';
import { SUBMIT_LOGIN, SAVE_USER_DATA } from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_LOGIN) {
    console.log('form submitted');
    console.log(store.getState().user.email);
    console.log(store.getState().user.password);

    axios.post(
      'http://nicolaslenne-server.eddi.cloud:8000/api/login_check',
      {
        username: store.getState().user.email,
        password: store.getState().user.password,
      },
    )
      .then((response) => {
        console.log(response);
        // Récupérer le pseudo dans la réponse et le stocker  dnas le state
        // => pour modifier le state, il faut dispatch une action
        // store.dispatch(saveUserData(response.data.pseudo));
      })

      .catch((error) => {
        console.log(error);
      });
  }
  next(action);
};

export default loginMiddleware;
