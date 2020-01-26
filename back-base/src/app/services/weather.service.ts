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

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private USERS_URL = 'http://localhost:8000/getWeatherData';
  constructor(private http: HttpClient) {}
  getWeatherData() {
    return this.http.get < Weather > (this.USERS_URL).pipe(
      delay(500)
    );
  }
}
