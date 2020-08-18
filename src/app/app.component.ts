import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Weather Grid Object */
  public weatherGrid: Weather[] = [];

  constructor(private weatherService: WeatherService) {
    for (let i = 0; i < 9; i++) { // create 9 empty objects
      this.weatherGrid.push({});
    }
  }

  /**
   * Gets the data from API by city name
   * @param cityName get the city name
   * @param grid get the index number
   */
  public getWeather(cityName: string, grid: number): void {
    this.weatherService.getWeatherByName(cityName).subscribe((weather) => {
      console.log(weather);
      this.weatherGrid[grid] = weather;
      this.weatherGrid[grid].dt = new Date(this.weatherGrid[grid].dt * 1000);
      switch (this.weatherGrid[grid].weather[0].main) {
        case 'Clouds':
          this.weatherGrid[grid].bgImage = 'assets/clouds.jpg';
          break;

        default:
          break;
      }
    });
  }

  /**
   * updates the weater object with city name by index.
   * @param cityName gets the city name
   * @param index gets the index of the object
   */
  public weatherObj(cityName: string, index: number): void {
    this.weatherGrid[index].name = cityName;
  }
}
