import { SAVE_CATEGORIES } from '../actions/categories';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        list: action.categories,
      };
    default:
      return state;
  }
};

export default reducer;
