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

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData() {
    const url1 = this.http.get < Weather > ('http://localhost:9000/getWeatherData?cityName=London');
    const url2 = this.http.get < Weather > ('http://localhost:9000/getWeatherData?cityName=Amsterdam');
    return forkJoin([url1, url2]);
  }
}
