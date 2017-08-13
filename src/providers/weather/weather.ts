import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = 'dd72cb0471a344fd8ccc9321667cf20c';
  url;

  constructor(public http: Http) {
    this.url = 'https://free-api.heweather.com/v5/weather?city=' ;
  }

  getWeather(city) {
    return this.http.get(this.url + city + '&key=' + this.apiKey)
      .map(res => res.json());
  }
}
