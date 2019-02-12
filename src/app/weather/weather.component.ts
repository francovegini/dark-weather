import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    weathers: any[];
    ids: any[];
    currentWeather: any[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getWeatherNext15Days('5090');
    }

    public getWeatherNext15Days(id: string) {
        this.apiService.getWeatherNext15Days(id)
            .subscribe((data: any) => {
                this.weathers = data;
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
