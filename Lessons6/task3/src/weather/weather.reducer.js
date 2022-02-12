import { CREATE_WEATHER_DATA } from './weather.actions';

const initialState = {
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WEATHER_DATA: {
      return {
        ...state,
        cities: action.payload.cities,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
