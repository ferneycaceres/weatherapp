export class CityWeatherModel {
    id: number;
    cityName: string;
    datetime:Date;
    weather: {
        text:string;
        icon:string;
        code:string;
    };
    precip_in:number;
    humidity:number;
    temp_c: number;
    wind_kph: number;
}
