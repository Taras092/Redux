import { ADD_USER, REMOVE_USER } from './user.actions';
import { initialState } from './store';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      const newUser = state.user.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        user: newUser,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
