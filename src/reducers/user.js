import {
  CHANGE_VALUE,
  GET_USER_DATA,
  SAVE_USER_DATA,
  CLEAN_STATE,
  SAVE_SLUG,
  CREATE_USER_ACCOUNT,
  SAVE_PROMO_NAMES,
  FETCH_STATUS_NAMES,
  SAVE_STATUS_NAMES,
  FETCH_PROMO_NAMES,
  SAVE_USER_EDIT,
  DISPLAY_ERROR,
} from '../actions/user';

export const initialState = {
  logged: false,
  loginError: false,
  email: '',
  password: '',
  checkPassword: '',
  firstname: '',
  lastname: '',
  promo: '',
  status: '',
  role: '',
  loading: false,
  loadingSupOne: false,
  loadingSupTwo: false,
  slug: '',
  promoNames: [],
  statusNames: [],
  searchValue: '',
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
      // Allow the "logged" state to change ASAP to open the lock at the login page
      // eslint-disable-next-line no-case-declarations
      const tokenStored = localStorage.getItem('token');
      if (tokenStored) {
        return {
          ...state,
          loading: true,
          displayError: false,
        };
      }
      return {
        ...state,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        email: action.email,
        firstname: action.firstname,
        lastname: action.lastname,
        promo: action.promo,
        status: action.status,
        role: action.role,
        password: '',
        loading: false,
        logged: true,
      };

    case CLEAN_STATE:
      return {
        ...state,
        logged: false,
        email: '',
        firstname: '',
        lastname: '',
        promo: '',
        status: '',
        role: '',
      };

    case SAVE_SLUG:
      return {
        ...state,
        slug: action.slug,
      };

    case DISPLAY_ERROR:
      return {
        ...state,
        loginError: true,
      };

    case FETCH_PROMO_NAMES:
      return {
        ...state,
        loadingSupOne: true,
      };

    case SAVE_PROMO_NAMES:
      return {
        ...state,
        loadingSupOne: false,
        promoNames: action.promoNames,
      };

    case FETCH_STATUS_NAMES:
      return {
        ...state,
        loadingSupTwo: true,
      };

    case SAVE_STATUS_NAMES:
      return {
        ...state,
        loadingSupTwo: false,
        statusNames: action.statusNames,
      };

    case CREATE_USER_ACCOUNT:
      return {
        ...state,
        email: action.email,
        firstname: action.firstname,
        lastname: action.lastname,
        promo: action.promo,
        status: action.status,
        password: '',
      };

    case SAVE_USER_EDIT:
      return {
        ...state,
        email: action.email,
        firstname: action.firstname,
        lastname: action.lastname,
        promo: action.promo,
        status: action.status,
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
