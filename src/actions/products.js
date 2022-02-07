export const FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY';
export const SAVE_PRODUCTS_BY_CATEGORY = 'SAVE_PRODUCTS_BY_CATEGORY';

export const FETCH_RANDOM_PRODUCTS = 'FETCH_RANDOM_PRODUCTS';
export const SAVE_RANDOM_PRODUCTS = 'SAVE_RANDOM_PRODUCTS';

export const FETCH_FAVORITE_PRODUCTS = 'FETCH_FAVORITE_PRODUCTS';
export const SAVE_FAVORITE_PRODUCTS = 'SAVE_FAVORITE_PRODUCTS';

export const FETCH_LATEST_PRODUCTS = 'FETCH_LATEST_PRODUCTS';
export const SAVE_LATEST_PRODUCTS = 'SAVE_LATEST_PRODUCTS';

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';
export const SAVE_SINGLE_PRODUCT = 'SAVE_SINGLE_PRODUCT';

export const FETCH_SEARCHED_PRODUCTS = 'FETCH_SEARCHED_PRODUCTS';
export const SAVE_SEARCHED_PRODUCTS = 'SAVE_SEARCHED_PRODUCTS';

export const CLEAN_LIST_STATE = 'CLEAN_LIST_STATE';

export const FETCH_PROFILE_PRODUCTS = 'FETCH_PROFILE_PRODUCTS';
export const SAVE_PROFILE_PRODUCTS = 'SAVE_PROFILE_PRODUCTS';

export const fetchProductsByCategory = () => ({
  type: FETCH_PRODUCTS_BY_CATEGORY,
});

export const saveProductsByCategory = (products) => ({
  type: SAVE_PRODUCTS_BY_CATEGORY,
  products: products,
});

export const fetchRandomProducts = () => ({
  type: FETCH_RANDOM_PRODUCTS,
});

export const saveRandomProducts = (randomProducts) => ({
  type: SAVE_RANDOM_PRODUCTS,
  randomProducts: randomProducts,
});

export const fetchFavoriteProducts = () => ({
  type: FETCH_FAVORITE_PRODUCTS,
});

export const saveFavoriteProducts = (favoriteProducts) => ({
  type: SAVE_FAVORITE_PRODUCTS,
  favoriteProducts: favoriteProducts,
});

export const fetchLatestProducts = () => ({
  type: FETCH_LATEST_PRODUCTS,
});

export const saveLatestProducts = (latestProducts) => ({
  type: SAVE_LATEST_PRODUCTS,
  latestProducts: latestProducts,
});

export const fetchSingleProduct = () => ({
  type: FETCH_SINGLE_PRODUCT,
});

export const saveSingleProduct = (product) => ({
  type: SAVE_SINGLE_PRODUCT,
  product: product,
});

export const fetchSearchedProducts = () => ({
  type: FETCH_SEARCHED_PRODUCTS,
});

export const saveSearchedProducts = (searchedProducts) => ({
  type: SAVE_SEARCHED_PRODUCTS,
  searchedProducts: searchedProducts,
});

export const cleanListState = () => ({
  type: CLEAN_LIST_STATE,
});

export const fetchProfileProducts = () => ({
  type: FETCH_PROFILE_PRODUCTS,
});

export const saveProfileProducts = (profileProducts) => ({
  type: SAVE_PROFILE_PRODUCTS,
  profileProducts: profileProducts,
});
