import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'weather', component: WeatherDisplayComponent },
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
