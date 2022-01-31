import { CHANGE_VALUE, SAVE_TOKEN, GET_USER_DATA } from '../actions/user';

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
      // console.log(action.identifier);

      return {
        ...state,
        [action.identifier]: action.value,
      };

    case SAVE_TOKEN: 
      return {
        ...state,
        logged: true,
        token: action.token,
      };

    case GET_USER_DATA: 
    return {
      ...state,
    }


    default:
      return state;
  }
};

export default reducer;
