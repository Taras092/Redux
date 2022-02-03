import { ADD_USER, DELETE_USER } from "./users.actions";
<<<<<<< HEAD
export const initialState = {
  usersList: [],
};

export const userReducer = (state = initialState, action) => {
=======

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
>>>>>>> af2a2c5b720796c809a2860d6af394a33bb6bd57
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
};
