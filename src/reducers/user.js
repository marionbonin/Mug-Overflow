import { CHANGE_VALUE } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // ici, nos propres actions pour tout reprendre au fur et à mesure

    case CHANGE_VALUE:
      console.log(action.identifier);

      return {
        ...state,
        [action.identifier]: action.value,
      };

    /* -------------------------
    ici, C/C entier du reducer user de oRecipes

    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

      /*  ---- Etape : sauvegarder data de l'utilisateur ----------
      case SAVE_USER_DATA:
        return {
          ...state,
          logged: action.isLogged,
          nickname: action.nickname,
          token: action.token,
          // sécurité : on en profite pour effacer les identifiants dans le state
          email: '',
          password: '',
        };
        */

    default:
      return state;
  }
};

export default reducer;
