import {Action} from '@ngrx/store';
import { CityForecastModel } from '../../models/city-forecast.model';

export const LOAD_FORECAST_DATA = '[CityForecast] Load Forescast Data';
export const LOAD_FORECAST_DATA_SUCCESS = '[CityForecast] Load Forescast Data Success';

export class LoadForecastDataAction implements Action {
    readonly type = LOAD_FORECAST_DATA;
    constructor(public payload: string) {}
}

export class LoadForecastDataSuccessAction implements Action  {
    readonly type = LOAD_FORECAST_DATA_SUCCESS;
    constructor(public payload: CityForecastModel[]) {}
}

export type cityForecastActions =   LoadForecastDataAction |
                                    LoadForecastDataSuccessAction;
