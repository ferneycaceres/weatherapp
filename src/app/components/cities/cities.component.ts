import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-reducers';
import * as fromWeatherActions from '../../../store/actions';
import { CityWeatherModel } from '../../../models/city-weather.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
    cities: CityWeatherModel[];
    constructor(private store: Store<AppState>) {}
  
    ngOnInit() {
      this.store.dispatch(new fromWeatherActions.LoadWeatherDataAction());
      this.store.select('citiesWeather').subscribe((citiesWeather: any) => {
        this.cities = citiesWeather.citiesWeather;
      });
    }

}
