import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  AppState,
  selectWeatherDetails
} from './models/app-state.model';
import {
  Store
} from '@ngrx/store';
import {
  Weather
} from './models/weather.model';
import {
  LoadWeatherAction
} from './actions/weather.actions';
import {
  CityWeather
} from './models/city-weather.model';
import {
  ColumnProp
} from './models/column-prop.model';
import {
  LoadHourlyWeatherAction
} from './actions/hourly-weather.actions';

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
  displayedColumns: ColumnProp[] = [{
    headerName: 'Name',
    prop: 'name'
  }, {
    headerName: 'Average Temperature',
    prop: 'avgTemp'
  }, {
    headerName: 'Wind Strength',
    prop: 'windStrength'
  }];
  constructor(private store: Store < AppState > ) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.store.dispatch(new LoadHourlyWeatherAction());
    this.weatherDetails$ = this.store.select(selectWeatherDetails);
  }
}
