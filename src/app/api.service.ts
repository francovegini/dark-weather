import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private API_URL = 'http://apiadvisor.climatempo.com.br/api/v1/';
    private TOKEN = '8ec2d199f092eb2f194d3451204146be';

    constructor(private httpClient: HttpClient) {
    }

    /**
     * Obtem a previsão dos próximos 15 dias de uma determinada cidade a partir do seu respectivo ID.
     *
     * @param id ID da cidade
     */
    public getWeatherNext15Days(id: string) {
        return this.httpClient.get(`${ this.API_URL }forecast/locale/${ id }/days/15?token=${ this.TOKEN }`);
    }

    /**
     * Obtem o ID de uma ou mais cidade a partir do nome e/ou estado.
     *
     * @param name Nome da cidade
     * @param state Estado
     */
    public getIdByNameOrState(name?: string, state?: string) {
        if ((name !== '' || name) && (state !== '' || state)) {
            return this.httpClient.get(`${ this.API_URL }locale/city?name=${ name }&state=${ state }&token=${ this.TOKEN }`);
        } else if ((name !== '' || name) && (!state || state === '')) {
            return this.httpClient.get(`${ this.API_URL }locale/city?name=${ name }&token=${ this.TOKEN }`);
        } else if ((!name || name === '') && (state !== '' || state)) {
            return this.httpClient.get(`${ this.API_URL }locale/city?state=${ state }&token=${ this.TOKEN }`);
        }
    }
}
