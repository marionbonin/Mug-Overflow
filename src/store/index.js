import { createStore, applyMiddleware, compose } from 'redux';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import categoriesMiddleware from 'src/middlewares/categoriesMiddleware';
import productsMiddleware from 'src/middlewares/productsMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';
import profileEditMiddleware from 'src/middlewares/profileEditMiddleware';
import reducer from 'src/reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleware),
  applyMiddleware(registerMiddleware),
  applyMiddleware(categoriesMiddleware),
  applyMiddleware(productsMiddleware),
  applyMiddleware(profileEditMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
