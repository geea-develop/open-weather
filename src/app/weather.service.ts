import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WeatherService {

  private key = "9e30cda41fa477d498c01c1f52d1bd90";
  private baseUrl = "http://api.openweathermap.org/";

  constructor(private http: HttpClient) {}

  public fetchAll() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}data/2.5/box/city?bbox=-180,-90,180,90,10&${this.addAppId}`)
        .toPromise()
        .then(
          res => resolve(res)
        );
    });
    return promise;
  }

  get addAppId() {
    return `appid=${this.key}`;
  }

}
