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
  delay
} from 'rxjs/operators';
import {
  forkJoin
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private USERS_URL = 'http://localhost:8000/getWeatherData';
  constructor(private http: HttpClient) {}
  getWeatherData() {
    const url1 = this.http.get < Weather > ('http://api.openweathermap.org/data/2.5/weather?q=London&appid=3d8b309701a13f65b660fa2c64cdc517');
    const url2 = this.http.get < Weather > ('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=3d8b309701a13f65b660fa2c64cdc517');
    return forkJoin([url1, url2]);
  }
}
