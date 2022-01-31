import { CHANGE_VALUE, GET_USER_DATA, SAVE_USER_DATA } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  promo: '', 
  status: '',
  role: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // ici, nos propres actions pour tout reprendre au fur et à mesure

    case CHANGE_VALUE:
      // console.log(action.identifier);

      return {
        ...state,
        [action.identifier]: action.value,
      };

    // case SAVE_TOKEN: // /!\ à réimporter dans actions et en haut de page si utilisation + tard
    //   return {
    //     ...state,
    //     logged: true,
    //     token: action.token,
    //   };


    case GET_USER_DATA: 
    return {
      ...state,
    }

    case SAVE_USER_DATA: 
    return {
      ...state,
      logged: true,
      email: action.email,
      firstname: action.firstname,
      lastname: action.lastname,
      promo: action.promo.name, 
      status: action.status,
      role: action.role,
    }


    default:
      return state;
  }
};

export default reducer;
