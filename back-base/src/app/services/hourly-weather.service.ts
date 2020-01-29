import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  HourlyWeather
} from '../models/hourly-weather.model';

@Injectable({
  providedIn: 'root'
})
export class HourlyWeatherService {

  constructor(private http: HttpClient) {}
  getHourlyWeatherDetails() {
    return this.http.get < HourlyWeather > ('http://localhost:9000/getHourlyWeatherData');
  }
}
