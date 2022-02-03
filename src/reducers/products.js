import {
  SAVE_PRODUCTS_BY_CATEGORY,
  SAVE_RANDOM_PRODUCTS,
  SAVE_FAVORITE_PRODUCTS,
  SAVE_LATEST_PRODUCTS,
} from '../actions/products';

export const initialState = {
  list: [],
  randomList: [],
  favoriteList: [],
  lastList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        list: action.products,
      };

    case SAVE_RANDOM_PRODUCTS:
      return {
        ...state,
        randomList: action.randomProducts,
      };

    case SAVE_FAVORITE_PRODUCTS:
      return {
        ...state,
        favoriteList: action.favoriteProducts,
      };

    case SAVE_LATEST_PRODUCTS:
      return {
        ...state,
        lastList: action.latestProducts,
      };
    default:
      return state;
  }
};

export default reducer;
