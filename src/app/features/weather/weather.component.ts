import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

    public temperatureList: number[] = [];
    public dateList: string[] = [];
    public isVisible = false;

    constructor(private apiService: ApiService) {
    }

    public receiveEvent($event): void {
        $event ? this.getWeatherNext15Days($event) : this.isVisible = false;
    }

    private getWeatherNext15Days(id: string) {
        this.apiService.getWeatherNext15Days(id)
            .subscribe((data: any) => {
                this.processInformation(data);
            });
    }

    private processInformation(data: any): void {
        const informationDay = data.data;

        this.resetLists();

        informationDay.forEach((each: any) => {
            const tempMin = each.temperature.min;
            const tempMax = each.temperature.max;

            const result = (tempMax + tempMin) / 2;
            this.temperatureList.push(result);
            this.dateList.push(each.date_br);
        });
        this.isVisible = true;
    }

    /**
     * Zera as listas para evitar que tenha dados de outra cidade.
     */
    private resetLists(): void {
        this.temperatureList = [];
        this.dateList = [];
    }
}
