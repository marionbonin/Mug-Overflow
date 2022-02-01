export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products: products,
});
