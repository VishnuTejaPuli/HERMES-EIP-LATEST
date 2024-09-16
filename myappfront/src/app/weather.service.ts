import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = environment.weatherApiUrl;
  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) {}

  getWeatherAlerts(city: string): Observable<any> {
    const url = `${this.apiUrl}weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
      map((data: any) => {
        const weatherCondition = data.weather[0].main;
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed; 
        const alerts: string[] = [];

        if (weatherCondition === 'Thunderstorm' || weatherCondition === 'Extreme') {
          alerts.push('Severe weather alert! Please stay indoors.');
        } else if (weatherCondition === 'Rain') {
          alerts.push('Heavy rain expected. Carry an umbrella!');
        } // Add more conditions as needed
        
        else if (weatherCondition === 'Snow') {
          alerts.push('Snowfall expected. Drive carefully and stay warm!');
        } else if (weatherCondition === 'Clear') {
          alerts.push('Clear skies ahead. Enjoy the sunshine!');
        } else if (weatherCondition === 'Clouds') {
          alerts.push('Cloudy weather expected. It might be a bit dull outside.');
        }
  
        // Check for temperature conditions
        if (temperature >= 35) {
          alerts.push('High temperature alert! Stay hydrated and avoid outdoor activities.');
        } else if (temperature <= 0) {
          alerts.push('Low temperature alert! Keep warm and avoid prolonged exposure to cold.');
        }
  
        // Check for wind speed conditions
        if (windSpeed >= 15) { // 15 m/s is approximately 54 km/h (considered high wind)
          alerts.push('High wind speeds detected. Secure loose items and be cautious if driving.');
        }
  
        // Check for other extreme conditions
        if (data.main.humidity >= 90) {
          alerts.push('High humidity alert! It may feel hotter than the actual temperature.');
        } else if (data.main.humidity <= 20) {
          alerts.push('Low humidity alert! Dry conditions expected. Moisturize and hydrate well.');
        }



        return { alerts, weather: data };
      })
    );
  }
}
