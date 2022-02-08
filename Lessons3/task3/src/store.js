import { createStore, combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
import languageReducer from './language.reducer';


const store = createStore(cartReducer);

export default store;
