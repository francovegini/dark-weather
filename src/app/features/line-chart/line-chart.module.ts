import {NgModule} from '@angular/core';
import {ChartModule} from 'angular-highcharts';
import {LineChartComponent} from './line-chart.component';

@NgModule({
    declarations: [LineChartComponent],
    imports: [ChartModule],
    exports: [LineChartComponent]
})
export class LineChartModule {
}
