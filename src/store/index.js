import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducer from 'src/reducers/reducer';

// import loginMiddleware from 'src/middlewares/logMiddleware'; 

// On construit un enhancer avec à la fois les devtools et les middlewares

const middlewares = applyMiddleware(logMiddleware, authMiddleware, websocketMiddleware, /* autres middlewares */ );

const enhancer = composeWithDevTools(middlewares);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
