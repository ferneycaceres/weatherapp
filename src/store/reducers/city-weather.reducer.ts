import { CityWeatherModel } from '../../models/city-weather.model';
import * as fromCityWeather from '../actions/city-weather.actions';

export interface CityWeatherState {
    citiesWeather: CityWeatherModel[];
}

const initialState: CityWeatherState = {
    citiesWeather: []
};

export function cityWeatherReducer(state = initialState, action: fromCityWeather.cityWeatherActions): CityWeatherState {
    switch (action.type) {
        case fromCityWeather.LOAD_WEATHER_DATA:
            return {
                ...state
            };
        case fromCityWeather.LOAD_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                citiesWeather: [...action.payload]
            };
        default:
            return state;
    }

}
