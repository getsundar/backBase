import {
  WeatherState
} from '../reducers/weather.reducers';
import {
  createSelector
} from '@ngrx/store';
import {
  CityWeather
} from './city-weather.model';
import {
  mapChildrenIntoArray
} from '@angular/router/src/url_tree';

export interface AppState {
  weather: WeatherState;
}


export const currentWeatherDetails = (state: AppState) => state.weather;


export const selectWeatherDetails = createSelector(
  currentWeatherDetails,
  (allCityWeather: WeatherState) => {
    if (!allCityWeather.loading) {
      const weatherDetailsArray = [];
      allCityWeather.weather.forEach(element => {
        const obj: CityWeather = {
          name: element.name,
          avgTemp: ((element.main.temp_max + element.main.temp_min) / 2),
          windStrength: element.wind.speed
        };
        weatherDetailsArray.push(obj);
      });
      return weatherDetailsArray;
    } else {
      return allCityWeather.weather;
    }
  }
);
