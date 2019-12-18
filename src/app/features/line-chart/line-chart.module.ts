import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { LineChartComponent } from './line-chart.component';

@NgModule({
    imports: [ChartModule],
    declarations: [LineChartComponent],
    exports: [LineChartComponent]
})
export class LineChartModule {
}
