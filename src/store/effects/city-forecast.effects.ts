import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as cityForecastActions from '../actions/city-forecast.actions';
import { WeatherService } from '../../services/weather.service';
import { CityForecastModel } from '../../models/city-forecast.model';


@Injectable()
export class CityForecastEffects {
    constructor(
        private actions$: Actions,
        private serviceWeather: WeatherService
    ) {}

    @Effect()
    loadCitiesWeather$ = this.actions$.pipe(
        ofType( cityForecastActions.LOAD_FORECAST_DATA ),
        switchMap((action: cityForecastActions.LoadForecastDataAction) => {
            return this.serviceWeather.getCitiesForecast(action.payload).pipe(
                    map((forecast: CityForecastModel[]) => {
                        return new cityForecastActions.LoadForecastDataSuccessAction(forecast);
                    })
                );
        })
    );
}
