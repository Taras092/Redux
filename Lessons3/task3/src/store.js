import { createStore, combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
import languageReducer from './language.reducer';

export const initialState = {
  language: 'en',
  user: null,
  cart: {
    products: [],
  },
};

// const appReducer = combineReducers({
//   language: languageReducer,
//   user: userReducer,
//   cart: {
//     cartReducer,
//   }
// });

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;