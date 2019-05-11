import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    public cityId: string;
    public temperatureList: number[] = [];
    public dateList: string[] = [];
    public isVisible: boolean;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    private getWeatherNext15Days(id: string) {
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
            this.dateList.push(each.date_br);
        });
        this.isVisible = true;
    }

    public receiveEvent($event) {
        this.cityId = $event;
        this.getWeatherNext15Days(this.cityId);
    }
}
