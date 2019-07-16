import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

    public cityId: string;
    public temperatureList: number[] = [];
    public dateList: string[] = [];
    public isVisible = false;

    constructor(private apiService: ApiService) {
    }

    public receiveEvent($event) {
        this.cityId = $event;
        this.getWeatherNext15Days(this.cityId);
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
        console.log(this.temperatureList);
        console.log(this.dateList);
        this.isVisible = true;
    }
}
