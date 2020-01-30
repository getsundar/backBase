import {
  Component,
  OnInit
} from '@angular/core';
import {
  Store
} from '@ngrx/store';
import {
  AppState,
  selectWeatherDetails,
  hourlyWeatherDetails
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
import {
  WEATHER_COLUMNS,
  HOURLY_WEATHER_COLUMNS
} from 'src/assets/columns-to-render';
@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  weatherDetails$: Observable < CityWeather > ;
  hourlyWeatherDetails$: Observable < any > ;
  hourlyWeatherShown = false;
  displayedWeatherColumns: ColumnProp[] = WEATHER_COLUMNS;
  displayedHourlyColumns: ColumnProp[] = HOURLY_WEATHER_COLUMNS;
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
    this.dataLoading = true;
    this.store.dispatch(new LoadHourlyWeatherAction({
      cityName: cityNameToGetDetails
    }));
    this.hourlyWeatherDetails$ = this.store.select(hourlyWeatherDetails);
    this.store.select('hourlyWeather').subscribe((hourlyWeatherData) => {
      this.dataLoading = hourlyWeatherData.loading;
      if (!this.dataLoading) {
        this.hourlyWeatherShown = true;
      }
    });
  }
}
