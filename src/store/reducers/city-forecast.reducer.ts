import { CityForecastModel } from '../../models/city-forecast.model';
import * as fromCityForecast from '../actions/city-forecast.actions';

export interface CityForecastState {
    cityForecast: CityForecastModel[];
}

const initialState: CityForecastState = {
    cityForecast: []
};

export function cityForecastReducer(state = initialState, action: fromCityForecast.cityForecastActions): CityForecastState {
    switch (action.type) {
        case fromCityForecast.LOAD_FORECAST_DATA:
            return {
                ...state
            };
        case fromCityForecast.LOAD_FORECAST_DATA_SUCCESS:
        return {
            ...state,
            cityForecast: [...action.payload]
        };
        default:
            return state;
    }
}
