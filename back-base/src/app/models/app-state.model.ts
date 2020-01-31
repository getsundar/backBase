import {
  WeatherState
} from '../reducers/weather.reducers';
import {
  HourlyWeatherState
} from '../reducers/hourly-weather.reducers';
import {
  createSelector
} from '@ngrx/store';
import {
  CityWeather
} from './city-weather.model';
import {
  CityHourlyWeather
} from './city-hourly-weather.model';

export interface AppState {
  weather: WeatherState;
  hourlyWeather: HourlyWeatherState;
}

export const currentWeatherDetails = (state: AppState) => state.weather;
export const selectWeatherDetails = createSelector(
  currentWeatherDetails,
  (allCityWeather: WeatherState) => {
    if (!allCityWeather.loading) {
      const weatherDetailsArray = [];
      allCityWeather.weather.forEach(element => {
        if (element.cod === 200) {
          const obj: CityWeather = {
            name: element.name,
            avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
            windStrength: element.wind.speed
          };
          weatherDetailsArray.push(obj);
        }
      });
      return weatherDetailsArray;
    } else {
      return allCityWeather.weather;
    }
  }
);
export const currentHourlyWeatherDetails = (state: AppState) => state.hourlyWeather;
export const hourlyWeatherDetails = createSelector(
  currentHourlyWeatherDetails,
  (allHourlyWeather: HourlyWeatherState) => {
    if (!allHourlyWeather.loading) {
      const weatherDetailsArray = [];
      allHourlyWeather.hourlyWeather.list.forEach(element => {
        const obj: CityHourlyWeather = {
          timeStamp: element.dt_txt,
          avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
          windStrength: element.wind.speed
        };
        weatherDetailsArray.push(obj);
      });
      return weatherDetailsArray;
    } else {
      return allHourlyWeather.hourlyWeather;
    }
  }
);
