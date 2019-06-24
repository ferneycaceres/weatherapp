import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    citiesWeather: reducers.CityWeatherState;
    cityforecast: reducers.CityForecastState;
}

export const appReducers: ActionReducerMap<AppState> = {
    citiesWeather: reducers.cityWeatherReducer,
    cityforecast: reducers.cityForecastReducer
};

