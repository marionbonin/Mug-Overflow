import api from './api';
import {
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_RANDOM_PRODUCTS,
  FETCH_FAVORITE_PRODUCTS,
  FETCH_LATEST_PRODUCTS,
  saveProductsByCategory,
  saveRandomProducts,
  saveFavoriteProducts,
  saveLatestProducts,
} from '../actions/products';

// const categorySlug = window.location.pathname;
// console.log(categorySlug);

const productsMiddleware = (store) => (next) => (action) => {
  let slugURL = store.getState().user.slug;
  if (slugURL === '') {
    const slugFromSearchBar = window.location.pathname;
    const lastSegment = slugFromSearchBar.split('/').pop();
    slugURL = lastSegment;
  }

  switch (action.type) {
    case FETCH_PRODUCTS_BY_CATEGORY:
      // console.log('appel à fetch products by category');
      // API call to get the products
      api.get(`/categories/${slugURL}/products`)
        .then((response) => {
          const { products } = response.data;
          store.dispatch(saveProductsByCategory(products));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_RANDOM_PRODUCTS:
      // API call to get 10 random products
      api.get('/products?type=random')
        .then((response) => {
          const randomProducts = response.data;
          store.dispatch(saveRandomProducts(randomProducts));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_FAVORITE_PRODUCTS:
      // API call to get fav products
      api.get('/products?type=favoritePromo')
        .then((response) => {
          const favoriteProducts = response.data;
          store.dispatch(saveFavoriteProducts(favoriteProducts));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_LATEST_PRODUCTS:
      // API call to get fav products
      api.get('/products?type=latest')
        .then((response) => {
          const latestProducts = response.data;
          store.dispatch(saveLatestProducts(latestProducts));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
  }
  next(action);
};

export default productsMiddleware;
