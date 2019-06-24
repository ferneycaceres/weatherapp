import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { CityWeatherModel } from 'src/models/city-weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherArray: any[] = [];
  constructor( private http: HttpClient) {
  }

  public getCitiesWeather() {
    const wheatherMendoza = this.http
                         .get(`http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=mendoza`);
    const wheatherBuenosAires = this.http
                         .get(`http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=argentina`);
    const wheatherBogota = this.http
                         .get(`http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=bogota`);
    const wheatherLima = this.http
                         .get(`http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=lima`);

    return forkJoin([wheatherMendoza, wheatherBuenosAires, wheatherBogota, wheatherLima])
    .pipe(
      map((results: any[]) => {
        return this.mapToCityWeatherModel(results);
      })
    );
  }

  public getCitiesForecast(city: string) {
    return this.http
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517`)
      .pipe(
        map((forescast: any) => {
          return this.mapToCityForecastModel(forescast.list);
        })
      );
  }

  private mapToCityWeatherModel(cityWeatherData) {
    return cityWeatherData.map((city) => {
      const cityWeatherReturn = new CityWeatherModel();
      cityWeatherReturn.cityName = city.location.name;
      cityWeatherReturn.datetime = city.location.localtime;
      cityWeatherReturn.weather = city.current.condition;
      cityWeatherReturn.precip_in = city.current.precip_in;
      cityWeatherReturn.humidity = city.current.humidity;
      cityWeatherReturn.temp_c = city.current.temp_c;
      cityWeatherReturn.wind_kph = city.current.wind_kph;
      return cityWeatherReturn;
    });
  }

  private mapToCityForecastModel(cityForecast) {
    return cityForecast.map((city) => {
      return {
        time: city.dt_txt,
        weather: city.weather[0].main,
        temp: city.main.temp,
        tempMax: city.main.temp_max,
        tempMin: city.main.temp_min,
        wind: city.wind.speed
      };
    });
  }
}
