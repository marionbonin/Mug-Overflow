/* ici nos propres actions pour tout reprendre au fur et à mesure
*/
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const GET_USER_DATA = 'GET_USER_DATA';

export const changeValue = (identifier, value) => ({
  type: CHANGE_VALUE,
  identifier: identifier,
  value: value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token: token,
});


export const getUserData = () => ({
  type: GET_USER_DATA,

});
