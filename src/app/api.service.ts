import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://apiadvisor.climatempo.com.br';
  TOKEN = '8ec2d199f092eb2f194d3451204146be';

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtem a previsão dos próximos 15 dias de uma determinada cidade a partir do seu respectivo ID.
   * @param id - ID da cidade
   */
  getWeatherNext15Days(id: string) { 
    return this.httpClient.get(`${this.API_URL}/api/v1/forecast/locale/${id}/days/15?token=${this.TOKEN}`);
  }

  /**
   * Obtem a previsão das próximas 72 horas de uma determinada cidade a partir do seu respectivo ID.
   * @param id - ID da cidade
   */
  getWeatherNext72Hours(id: string) { 
    return this.httpClient.get(`${this.API_URL}/api/v1/forecast/locale/${id}/hours/72?token=${this.TOKEN}`);
  }

  /**
   * Obtem o ID de uma ou mais cidade a partir do nome e/ou estado.
   * @param name (opcional) - Nome da cidade
   * @param state (opcional) - Estado
   */
  getIdByNameOrState(name?: string, state?: string) {
    if ((name !== '' || name) && (state !== '' || state)) {
      return this.httpClient.get(`${this.API_URL}/api/v1/locale/city?name=${name}&state=${state}&token=${this.TOKEN}`);
    } else if ((name !== '' || name) && (!state || state === '')) {
      return this.httpClient.get(`${this.API_URL}/api/v1/locale/city?name=${name}&token=${this.TOKEN}`);
    } else if ((!name || name === '') && (state !== '' || state)) {
      return this.httpClient.get(`${this.API_URL}/api/v1/locale/city?state=${state}&token=${this.TOKEN}`);
    }
  }

  /**
   * Obtem o tempo atual de determinada cidade pelo seu respectivo ID.
   * @param id - ID da cidade
   */
  getCurrentWeather(id: string){
    return this.httpClient.get(`${this.API_URL}/api/v1/weather/locale/${id}/current?token=${this.TOKEN}`)
  }

}
