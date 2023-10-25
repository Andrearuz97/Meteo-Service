import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  cityName: string = 'Rome'; // Esempio
  forecasts: any[] = [
    { date: 'Domani', iconUrl: 'path_to_icon.png', temperature: 23, description: 'Parzialmente nuvoloso' },
    // Altri giorni di previsione...
  ];

  constructor() { }

  ngOnInit(): void {
    // Qui puoi chiamare un servizio per ottenere i dati meteo reali per i prossimi giorni.
  }
}

