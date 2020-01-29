import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable,
  concat,
  forkJoin
} from 'rxjs';
import {
  AppState,
  selectWeatherDetails
} from './models/app-state.model';
import {
  Store,
  createSelector
} from '@ngrx/store';
import {
  Weather
} from './models/weather.model';
import {
  LoadWeatherAction
} from './actions/weather.actions';
import {
  HttpClient
} from '@angular/common/http';
import {
  WeatherState
} from './reducers/weather.reducers';
import {
  CityWeather
} from './models/city-weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'back-base';
  citySelected = '';
  weatherDetails$: Observable < CityWeather > ;
  concatinatedData: Observable < Array < Weather > > ;
  cities = ['London', 'Amsterdam'];
  displayedColumns: string[] = ['name', 'avgTemp', 'windStrength'];
  weatherDetailsLoaded = false;
  constructor(private store: Store < AppState > , private http: HttpClient) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.weatherDetails$ = this.store.select(selectWeatherDetails);
    // this.weatherDetails$.subscribe((data) => {
    //   if (data !== undefined) {
    //     this.weatherDetailsLoaded = true;
    //   }
    // });
  }
}
