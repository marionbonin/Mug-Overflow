import {
  SAVE_PRODUCTS_BY_CATEGORY,
  SAVE_RANDOM_PRODUCTS,
  SAVE_FAVORITE_PRODUCTS,
  SAVE_LATEST_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  SAVE_SINGLE_PRODUCT,
  SAVE_SEARCHED_PRODUCTS,
  FETCH_SEARCHED_PRODUCTS,
  SAVE_PROFILE_PRODUCTS,
  FETCH_PROFILE_PRODUCTS,
  CLEAN_LIST_STATE,
} from '../actions/products';

export const initialState = {
  list: [],
  randomList: [],
  favoriteList: [],
  lastList: [],
  singleProductList: [],
  profileProductsList: [],
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

    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case SAVE_SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        singleProductList: action.product,
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

    case CLEAN_LIST_STATE:
      return {
        ...state,
        list: [],
      };

    case FETCH_PROFILE_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case SAVE_PROFILE_PRODUCTS:
      return {
        ...state,
        profileProductsList: action.profileProducts,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
