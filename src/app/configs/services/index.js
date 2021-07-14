import ApiService from './apiService';

const Settings = {
  SERVER_URL: 'http://api.weatherapi.com',
  API_URL: '/v1',
  DEFAULT_API_KEY: 'ff9f895b2e884d6680530135202710',
  DEFAULT_QUERY: '/current.json',
  viewApilog: true
};

const apiUrl = Settings.SERVER_URL + Settings.API_URL + Settings.DEFAULT_QUERY;

const setWeatherUrl = (apiKey, city) => {
  let reqUrl = apiUrl + `?key=${apiKey}&q=${city}`;
  return reqUrl;
};

const HttpService = new ApiService(Settings.viewApilog, apiUrl);

export { Settings, HttpService, setWeatherUrl };
