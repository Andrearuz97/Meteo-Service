import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  cityName: string = 'Rome';
  weatherIconUrl: string = 'path_to_icon.png';
  temperature: number = 25;
  description: string = 'Soleggiato';

  constructor() { }

  ngOnInit(): void {
    //service per ottenere i dati meteo reali.
  }
}
