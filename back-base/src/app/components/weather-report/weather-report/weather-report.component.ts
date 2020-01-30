import {
  Component,
  OnInit
} from '@angular/core';
import {
  Store
} from '@ngrx/store';
import {
  AppState,
  selectWeatherDetails
} from 'src/app/models/app-state.model';
import {
  LoadWeatherAction
} from 'src/app/actions/weather.actions';
import {
  LoadHourlyWeatherAction
} from 'src/app/actions/hourly-weather.actions';
import {
  Observable
} from 'rxjs';
import {
  CityWeather
} from 'src/app/models/city-weather.model';
import {
  ColumnProp
} from 'src/app/models/column-prop.model';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  weatherDetails$: Observable < CityWeather > ;
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
  dataLoading = false;
  constructor(private store: Store < AppState > ) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.weatherDetails$ = this.store.select(selectWeatherDetails);
    this.store.select('weather').subscribe((weatherData) => {
      this.dataLoading = weatherData.loading;
    });
  }
  onShowingHourlyDetails(cityNameToGetDetails) {
    this.store.dispatch(new LoadHourlyWeatherAction({
      cityName: cityNameToGetDetails
    }));
  }

}
