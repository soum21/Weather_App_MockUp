import * as types from '../actionTypes';
import globalStates from '../states';

export default function globalReducer(state = globalStates, action) {
  switch (action.type) {
    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
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
        error: ''
      };
    default:
      return state;
  }
}
