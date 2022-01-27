/* ici nos propres actions pour tout reprendre au fur et à mesure
*/
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const changeValue = (identifier, value) => ({
  type: CHANGE_VALUE,
  identifier: identifier,
  value: value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveUserData = (isLogged, nickname, token) => ({
  type: SAVE_USER_DATA,
  isLogged: isLogged,
  nickname: nickname,
  token: token,
});
