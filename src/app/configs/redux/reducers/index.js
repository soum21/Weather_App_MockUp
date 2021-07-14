import * as types from '../actionTypes';
import globalStates from '../states';

export default function globalReducer(state = globalStates, action) {
  switch (action.type) {
    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        error: ''
      };
    case types.ERROR_WEATHER_DATA:
      return {
        ...state,
        weather: [],
        error: action.error
      };
    case types.RESET_HOME:
      return {
        weather: [],
        error: ''
      };
    default:
      return state;
  }
}
