import { Chart } from 'chart.js/auto';
import { Component, AfterContentInit } from '@angular/core';
import { noop } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss'],
})
export class GraphViewComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    let chart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          'Station Name Dummy 1',
          'Station Name Dummy 1',
          'Station Name Dummy 1',
          'Station Name Dummy 1',
          'Station Name Dummy 1',
        ],
        datasets: [
          {
            label: 'SALES',
            data: [250, 140, 190, 240, 120],
            backgroundColor: '#FF7F5C',
            categoryPercentage: 0.1,
            barPercentage: 0.9,
          },
          {
            label: 'TRANSACTION',
            data: [200, 170, 100, 290, 140],
            backgroundColor: '#F4DBD4',
            categoryPercentage: 0.1,
            barPercentage: 0.9,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          title: {
            display: true,
            text: 'STATIONS ACTIVATES OVERVIEW',
            align: 'start',
          },
          legend: {
            align: 'end',
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            min: 50,
            max: 300,
            ticks: {
              stepSize: 50,
            },
            grid: {},
          },
        },
      },
    });
  }
}
