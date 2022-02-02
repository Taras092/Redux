import { initialState } from './store';

export const ADD_USER = 'ADD__USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = user => {
  return {
    type: ADD_USER,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
  };
};

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat([{ id: 76, name: 'Sarah' }]),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: [],
      };
    default:
      return state;
  }
};