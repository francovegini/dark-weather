import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit {

    chart = new Chart(<any>{
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
            data: [{y: 29.9, id: 'min'}, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, {y: 216.4, id: 'max'}, 194.1, 95.6, 54.4]
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
