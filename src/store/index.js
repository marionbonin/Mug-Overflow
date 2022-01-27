import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers/';
import loginMiddleware from 'src/middlewares/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
