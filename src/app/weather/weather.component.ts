import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getWeatherNext15Days('5090');
    }

    weathers: any[];
    ids: any[];
    currentWeather: any[];

    public getWeatherNext15Days(id: string) {
        this.apiService.getWeatherNext15Days(id)
            .subscribe((data: Array<object>) => {
                this.weathers = data;
                console.log('API para buscar o clima dos próximos 15 dias' + data);
            });
    }

    public getWeatherNext72Hours(id: string) {
        this.apiService.getWeatherNext72Hours(id)
            .subscribe((data: Array<object>) => {
                this.weathers = data;
                console.log('API para buscar o clima das próximas 72 horas' + data);
            });
    }

    public getIdByNameOrState(name?: string, state?: string) {
        this.apiService.getIdByNameOrState(name, state)
            .subscribe((data: Array<object>) => {
                this.ids = data;
                console.log('API para buscar o ID pelo nome ou estado' + data);
            });
    }

    public getCurrentWeather(id: string) {
        this.apiService.getCurrentWeather(id)
            .subscribe((data: Array<object>) => {
                this.currentWeather = data;
                console.log('API para buscar o clima atual' + data);
            });
    }

}
