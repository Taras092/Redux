import { SET_LANGUAGE } from './language.actions';
import { initialState } from './store';

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload.language
      };
    }
    default:
      return state;
  }
};

export default languageReducer;