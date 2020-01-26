import {
  WeatherState
} from '../reducers/weather.reducers';

export interface AppState {
  weather: WeatherState;
}

// export const currentWeatherDetails = (weather: AppState) => weather.weather;

