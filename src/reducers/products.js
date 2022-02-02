import { SAVE_PRODUCTS_BY_CATEGORY, FETCH_PRODUCTS_BY_CATEGORY } from '../actions/products';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
      };

    case SAVE_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        list: action.products,
      };
    default:
      return state;
  }
};

export default reducer;
