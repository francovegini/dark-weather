import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit, OnChanges {

    @Input() categories: any[];
    @Input() data: any[];

    public chart: any;

    constructor() {
    }

    ngOnInit(): void {
        this.updateData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.updateData();
    }

    private updateData(): void {
        if (this.categories && this.data) {
            this.chart = new Chart(<any>{
                xAxis: {
                    categories: this.categories
                },
                yAxis: {
                    plotLines: [{
                        color: 'green',
                        width: 2,
                        value: 155,
                        dashStyle: 'shortdash',
                    }],
                },
                title: {
                    text: 'Temperatura da semana'
                },
                credits: {
                    enabled: false
                },
                series: [{
                    data: this.data
                }],
                annotations: [{
                    labels:
                        [
                            {
                                point: 'max',
                                text: 'Max'
                            },
                            {
                                point: 'min',
                                text: 'Min',
                                backgroundColor: 'white'
                            }
                        ]
                }]
            });
        }
    }
}
