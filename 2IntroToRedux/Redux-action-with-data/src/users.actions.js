import { initialState } from './store';

export const ADD_USER = 'ADD__USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: { user },
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: { id },
  };
};

export const actionsCreators = (state = initialState, action) => {
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
