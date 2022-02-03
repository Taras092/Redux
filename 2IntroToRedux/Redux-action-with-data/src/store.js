import { createStore } from 'redux';
import { createReducer } from './users.reducer';
import { actionsCreators } from './users.actions';

export const initialState = {
  usersList: [],
};

const store = createStore(createReducer);
// const store = createStore(actionsCreators);

export default store;