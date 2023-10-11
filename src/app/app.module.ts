import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { CurrentWeatherComponent } from './components/weather-display/current-weather/current-weather.component';
import { ForecastComponent } from './components/weather-display/forecast/forecast.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherDisplayComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    CitySelectorComponent,
    WeatherDetailsComponent,
    ErrorComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
