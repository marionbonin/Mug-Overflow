import {
  SAVE_PRODUCTS_BY_CATEGORY,
  SAVE_RANDOM_PRODUCTS,
  SAVE_FAVORITE_PRODUCTS,
  SAVE_LATEST_PRODUCTS,
  SAVE_SINGLE_PRODUCT,
  SAVE_SEARCHED_PRODUCTS,
  FETCH_SEARCHED_PRODUCTS,
} from '../actions/products';

export const initialState = {
  list: [],
  randomList: [],
  favoriteList: [],
  lastList: [],
  loading: false,
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

    case SAVE_SINGLE_PRODUCT:
      return {
        ...state,
        list: action.product,
      };

    case FETCH_SEARCHED_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case SAVE_SEARCHED_PRODUCTS:
      return {
        ...state,
        list: action.searchedProducts,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
