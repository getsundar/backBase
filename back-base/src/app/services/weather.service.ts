import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Weather
} from '../models/weather.model';
import {
  forkJoin
} from 'rxjs';
import {
  CITY_NAMES
} from 'src/assets/constants';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData() {
    const citiesToLoad = [];
    CITY_NAMES.forEach((city) => {
      citiesToLoad.push(this.http.get < Weather > ('http://localhost:9000/getWeatherData?cityName=' + city));
    });
    return forkJoin(citiesToLoad);
  }
}
