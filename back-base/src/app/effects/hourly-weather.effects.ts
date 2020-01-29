import {
  Injectable
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  map,
  mergeMap,
  catchError
} from 'rxjs/operators';
import {
  of
} from 'rxjs';
import {
  LoadHourlyWeatherAction,
  LoadHourlyWeatherSuccessAction,
  LoadHourlyWeatherFailureAction,
  HourlyWeatherActionTypes
} from '../actions/hourly-weather.actions';
import {
  HourlyWeatherService
} from '../services/hourly-weather.service';

@Injectable()
export class HourlyWeatherEffects {

  @Effect() loadHourlyWeather$ = this.actions$
    .pipe(
      ofType < LoadHourlyWeatherAction > (HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA),
      mergeMap(
        () => this.hourlyWeatherService.getHourlyWeatherDetails()
        .pipe(
          map(data => {
            return new LoadHourlyWeatherSuccessAction(data);
          }),
          catchError(error => of (new LoadHourlyWeatherFailureAction(error)))
        )
      ),
    );

  constructor(
    private actions$: Actions,
    private hourlyWeatherService: HourlyWeatherService
  ) {}
}
