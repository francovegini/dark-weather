import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit {

    @Input() categories: any[];
    @Input() data: any[];

    chart = new Chart(<any>{
        xAxis: {
            categories: [this.categories],
            plotLines: [{ // summer months - treat from/to as numbers
                color: '#FF0000',
                width: 2,
                value: 5.5,
                id: 'plotline-1'
            }],
        },
        yAxis: {
            plotLines: [{ // summer months - treat from/to as numbers
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
            data: [10, 20, 30, 40, 50]
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

    constructor() {

    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }


}
