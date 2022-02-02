export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY';
export const SAVE_PRODUCTS_BY_CATEGORY = 'SAVE_PRODUCTS_BY_CATEGORY';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products: products,
});

export const fetchProductsByCategory = () => ({
  type: FETCH_PRODUCTS_BY_CATEGORY,
});

export const saveProductsByCategory = (products) => ({
  type: SAVE_PRODUCTS_BY_CATEGORY,
  products: products,
});
