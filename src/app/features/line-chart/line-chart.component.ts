import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

    @Input() categories: any[];
    @Input() data: any[];

    public chart: any;

    constructor() {
    }

    ngOnInit(): void {
        console.log('Startou line-chart.component');
        this.updateData();
    }

    private updateData(): void {
        if (this.categories && this.data) {
            this.chart = new Chart(<any>{
                xAxis: {
                    categories: this.categories,
                    plotLines: [{
                        color: '#FF0000',
                        width: 2,
                        value: 5.5,
                        id: 'plotline-1'
                    }],
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
                    labels: [{
                        point: 'max',
                        text: 'Max'
                    }, {
                        point: 'min',
                        text: 'Min',
                        backgroundColor: 'white'
                    }]
                }]
            });
        }
    }
}
