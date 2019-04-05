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
            data: [this.data]
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
