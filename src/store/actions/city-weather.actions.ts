import {Action} from '@ngrx/store';
import { CityWeatherModel } from '../../models/city-weather.model';


export const LOAD_WEATHER_DATA = '[CityWeather] Load Weather Data';
export const LOAD_WEATHER_DATA_SUCCESS = '[CityWeather] Load Weather Data Success';

export class LoadWeatherDataAction implements Action {
    readonly type = LOAD_WEATHER_DATA;
}

export class LoadWeatherDataSuccessAction implements Action {
    readonly type = LOAD_WEATHER_DATA_SUCCESS;
    constructor(public payload: CityWeatherModel[]) {}
}

export type cityWeatherActions = LoadWeatherDataAction |
                                LoadWeatherDataSuccessAction;
