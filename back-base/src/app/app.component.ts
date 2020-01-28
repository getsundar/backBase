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
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'back-base';
  citySelected = '';
  weatherDetais$: Observable < Weather > ;
  concatinatedData: Observable < Array < Weather > > ;
  cities = ['London', 'Amsterdam'];
  displayedColumns: string[] = ['name'];

  dataSource;
  constructor(private store: Store < AppState > , private http: HttpClient) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.weatherDetais$ = this.store.select(store => store.weather.weather);
    this.weatherDetais$.subscribe((data) => {});
  };
}
