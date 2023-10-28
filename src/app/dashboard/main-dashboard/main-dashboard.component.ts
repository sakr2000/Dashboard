import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    let chartCanvas = new Chart('chartCanvas', {
      type: 'radar',
      options: {
        elements: {
          line: {
            tension: 0.3,
          },
          point: {
            radius: 0,
          },
        },
        scales: {
          r: {
            min: 0,
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      data: {
        labels: [
          '24:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        datasets: [
          {
            data: [70, 95, 65, 60, 75, 90, 80, 65, 75, 80, 60, 70],
            backgroundColor: '#00CBC033',
            borderColor: '#00CBC0',
          },
          {
            data: [50, 65, 85, 70, 65, 80, 70, 75, 90, 85, 70, 60],
            backgroundColor: '#009ACF33',
            borderColor: '#009ACF',
          },
        ],
      },
    });
  }
}
