import { Component } from '@angular/core';
import {WeatherService} from "./weather.service";
import {City} from "./city";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Open weather';
  cities: Array<City>;
  loading:boolean = true;
  bestTemp = 21;
  bestHumidity = 50;

  constructor(private weatherService: WeatherService) {
    this.weatherService.fetchAll().then((res) => {
      this.cities = res['list'];
      this.sortBestWeather();

    });
  }

  toggleTemp(val) {
    this.bestTemp = val;
    this.loading = true;
    this.sortBestWeather();
  }

  private sortBestWeather() {
    this.cities.sort((a, b) => {
      var distance1 = Math.abs(this.bestTemp - a.main.temp) + Math.abs(this.bestHumidity - a.main.humidity);
      var distance2 = Math.abs(this.bestTemp - b.main.temp) + Math.abs(this.bestHumidity - b.main.humidity)

      return distance1 == distance2 ? 0 : (distance1 > distance2 ? 1 : -1);
    });

    this.loading = false;
  }
}
