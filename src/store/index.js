import { createStore, applyMiddleware, compose } from 'redux';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import categoriesMiddleware from 'src/middlewares/categoriesMiddleware';
import productsMiddleware from 'src/middlewares/productsMiddleware';
import reducer from 'src/reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleware),
  applyMiddleware(categoriesMiddleware),
  applyMiddleware(productsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
