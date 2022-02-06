/* ici nos propres actions pour tout reprendre au fur et à mesure
*/

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// export const SAVE_TOKEN = 'SAVE_TOKEN';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLEAN_STATE = 'CLEAN_STATE';
export const SAVE_SLUG = 'SAVE_SLUG';
export const CREATE_USER_ACCOUNT = 'CREATE_USER_ACCOUNT';
export const FETCH_PROMO_NAMES = 'FETCH_PROMO_NAMES';
export const SAVE_PROMO_NAMES = 'SAVE_PROMO_NAMES';
export const FETCH_STATUS_NAMES = 'FETCH_STATUS_NAMES';
export const SAVE_STATUS_NAMES = 'SAVE_STATUS_NAMES';

export const changeValue = (identifier, value) => ({
  type: CHANGE_VALUE,
  identifier: identifier,
  value: value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

// export const saveToken = (token) => ({
//   type: SAVE_TOKEN,
//   token: token,
// });

// API call in middleware
export const getUserData = () => ({
  type: GET_USER_DATA,

});

export const saveUserData = (email, firstname, lastname, promo, status, role) => ({
  type: SAVE_USER_DATA,
  email: email,
  firstname: firstname,
  lastname: lastname,
  promo: promo,
  status: status,
  role: role,
});

export const cleanState = () => ({
  type: CLEAN_STATE,
});

export const saveSlug = (slug) => ({
  type: SAVE_SLUG,
  slug: slug,
});

export const createUserAccount = (firstname, lastname, promo, role, email, password) => ({
  type: CREATE_USER_ACCOUNT,
  firstname: firstname,
  lastname: lastname,
  promo: promo,
  role: role,
  email: email,
  password: password,
});

export const fetchPromoNames = () => ({
  type: FETCH_PROMO_NAMES,
});

export const savePromoNames = (promoNames) => ({
  type: SAVE_PROMO_NAMES,
  promoNames: promoNames,
});

export const fetchStatusNames = () => ({
  type: FETCH_STATUS_NAMES,
});

export const saveStatusNames = (statusNames) => ({
  type: SAVE_STATUS_NAMES,
  statusNames: statusNames,
});
