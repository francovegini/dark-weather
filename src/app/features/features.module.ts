import {NgModule} from '@angular/core';
import {NavbarModule} from './navbar/navbar.module';
import {SearchCityModule} from './search-city/search-city.module';
import {LineChartModule} from './line-chart/line-chart.module';


@NgModule({
    declarations: [
        NavbarModule,
        SearchCityModule,
        LineChartModule
    ]
})
export class FeaturesModule {
}
