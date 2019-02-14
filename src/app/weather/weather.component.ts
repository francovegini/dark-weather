import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    public ids: any[];
    public currentWeather: any[];
    public temperatureList: number[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getWeatherNext15Days('5090');
    }

    public getWeatherNext15Days(id: string) {
        this.apiService.getWeatherNext15Days(id)
            .subscribe((data: any) => {
                this.processInformation(data);
            });
    }

    private processInformation(data: any): void {
        const informationDay = data.data;

        informationDay.forEach((each: any) => {
            const tempMin = each.temperature.min;
            const tempMax = each.temperature.max;

            const result = (tempMax + tempMin) / 2;
            this.temperatureList.push(result);
        });
    }

    public getIdByNameOrState(name?: string, state?: string) {
        this.apiService.getIdByNameOrState(name, state)
            .subscribe((data: Array<object>) => {
                this.ids = data;
            });
    }

    public getCurrentWeather(id: string) {
        this.apiService.getCurrentWeather(id)
            .subscribe((data: Array<object>) => {
                this.currentWeather = data;
            });
    }

}
