import { getUserData } from "./weather.gateway";

export const CREATE_WEATHER_DATA = 'CREATE_WEATHER_DATA';

export const createWeatherData = cities => {
  return {
    type: CREATE_WEATHER_DATA,
    payload: {
      cities,
    },
  };
};

export const getWeatherData = () => {
  return function(dispatch) {
    getUserData().then(cities => {
      dispatch(createWeatherData(cities));
    });
  } 
}