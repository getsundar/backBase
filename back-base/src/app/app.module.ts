import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  StoreModule
} from '@ngrx/store';
import {
  EffectsModule
} from '@ngrx/effects';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  WeatherReducer
} from './reducers/weather.reducers';
import {
  WeatherEffects
} from './effects/weather.effects';
import {
  MatTableModule
} from '@angular/material/table';
import {
  DataGridComponent
} from './components/data-grid/data-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      weather: WeatherReducer
    }),
    EffectsModule.forRoot([WeatherEffects]),
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
