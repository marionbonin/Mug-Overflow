import api from './api';
import {
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_RANDOM_PRODUCTS,
  FETCH_FAVORITE_PRODUCTS,
  FETCH_LATEST_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  saveProductsByCategory,
  saveRandomProducts,
  saveFavoriteProducts,
  saveLatestProducts,
  saveSingleProduct,
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
          console.log(randomProducts);
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
          console.log(favoriteProducts);
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
          console.log(latestProducts);
          store.dispatch(saveLatestProducts(latestProducts));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_SINGLE_PRODUCT:
      // API call to get fav products
      api.get(`/products/${slugURL}`)
        .then((response) => {
          const singleProduct = response.data;
          console.log(singleProduct);
          store.dispatch(saveSingleProduct(singleProduct));
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
