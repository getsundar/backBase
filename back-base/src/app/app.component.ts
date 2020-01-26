import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  AppState
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'back-base';
  citySelected = '';
  weatherDetais$: Observable < Weather > ;
  cities = ['London', 'Amsterdam'];
  constructor(private store: Store < AppState > ) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.weatherDetais$ = this.store.select(store => store.weather.weather);
    this.weatherDetais$.subscribe((data) => {});
  }
  onCityChanged() {

  }
}
