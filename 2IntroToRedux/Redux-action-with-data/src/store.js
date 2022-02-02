import { createStore } from 'redux';
import { createReducer } from './users.reducer';
import { actionsCreators } from './users.actions';

export const ADD_USER = 'ADD__USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  }
}

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: {id},
  };
}

export const initialState = {
  usersList: [],
};

const store = createStore(createReducer);
export const store1 = createStore(actionsCreators);

export default store;