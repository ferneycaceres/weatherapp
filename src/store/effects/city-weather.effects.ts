import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as cityWeatherActions from '../actions/city-weather.actions';
import { WeatherService } from '../../services/weather.service';

@Injectable()
export class CityWeatherEffects {
    constructor(
        private actions$: Actions,
        private serviceWeather: WeatherService
    ) {}

    @Effect()
    loadCitiesWeather$ = this.actions$.pipe(
        ofType( cityWeatherActions.LOAD_WEATHER_DATA ),
        switchMap((action: cityWeatherActions.LoadWeatherDataAction) => {
            return this.serviceWeather.getCitiesWeather().pipe(
                    map((weather: any[]) => {
                        return new cityWeatherActions.LoadWeatherDataSuccessAction(weather);
                    })
                );
        })
    );
}
