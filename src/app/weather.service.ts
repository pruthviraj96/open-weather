import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = environment.baseUrl;
  private weatherKey: string = environment.weatherKey;
  private imgURL: string = environment.imgURL;

  constructor(
    private http: HttpClient
  ) { }

  public getWeatherByName(cityName): Observable<Weather> {
    try {
      return this.http.get<Weather>(`${this.baseUrl}?q=${cityName}&appid=${this.weatherKey}`);
    } catch (error) {
      return error;
    }
  }

  public getWeatherImage(icon: string): Observable<any> {
    return this.http.get<any>(`${this.imgURL}${icon}.png`);
  }
}
