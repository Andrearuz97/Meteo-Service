import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherDisplayComponent },
  { path: 'select-city', component: CitySelectorComponent },
  { path: 'details/:day', component: WeatherDetailsComponent },
  { path: 'error', component: ErrorComponent },
  {path: 'loading', component: LoadingComponent},
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
