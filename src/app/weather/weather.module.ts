import { NgModule } from '@angular/core';

import { WeatherComponent } from './weather.component';
import { ApiService } from '../api.service';
import { SearchCityModule } from '../features/search-city/search-city.module';
import { LineChartModule } from '../features/line-chart/line-chart.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [WeatherComponent],
    imports: [
        SearchCityModule,
        LineChartModule,
        CommonModule
    ],
    providers: [ApiService],
    exports: [WeatherComponent]
})
export class WeatherModule {
}

