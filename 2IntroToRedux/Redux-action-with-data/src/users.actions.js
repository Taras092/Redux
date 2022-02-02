import { ADD_USER, DELETE_USER, initialState } from './store';

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat([action.payload]),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};
