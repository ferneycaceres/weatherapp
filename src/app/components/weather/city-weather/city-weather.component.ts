import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherModel } from 'src/models/city-weather.model';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  @Input() city: CityWeatherModel;

  constructor() { }

  ngOnInit() {
  }

}
