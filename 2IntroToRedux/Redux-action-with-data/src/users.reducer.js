import { initialState } from './store';

export const ADD_USER = 'USERS/ADD__USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const deleteUser = () => {
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