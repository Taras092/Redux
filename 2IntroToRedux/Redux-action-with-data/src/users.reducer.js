import { initialState, ADD_USER, DELETE_USER } from './store';

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