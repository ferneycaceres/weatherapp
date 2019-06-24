import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
//import { ForecastWeatherComponent } from './components/weather/forecast-weather/forecast-weather.component';

const routes: Routes = [
  { path: '', component: CitiesComponent },
  //{ path: 'forecast/:city', component: ForecastWeatherComponent },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
