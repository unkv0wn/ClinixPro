import { Component, HostListener, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Users,
  Camera,
  Search,
  Trash2,
  Printer,
  FileText,
} from 'lucide-angular';
import { IconHeaderComponent } from '../../components/icon-header/icon-header.component';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-financal',
  imports: [
    LucideAngularModule,
    IconHeaderComponent,
    CommonModule,
    HighchartsChartModule
  ],
  templateUrl: './financal.component.html',
  styleUrl: './financal.component.css',

})
export class FinancalComponent implements OnInit {
  readonly Users = Users;
  readonly Camera = Camera;
  readonly Seach = Search;
  readonly Trash = Trash2;
  readonly Printer = Printer;
  readonly TableOfContents = FileText;

  notions = [
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
    { message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  ];

  // Opções do gráfico ECharts
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartRef: Highcharts.Chart | null = null;

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Lucro',
        align: 'left'
      },
      xAxis: {
        categories: ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],

      },
      yAxis: {
        title: {
          text: 'Lucro',
          align: 'high'
        },
      },
      series: [
        {
          name: 'Lucro',
          type: 'spline',
          data: [30, 50, 80, 40, 100, 60],
        },
      ],
    };
  }

 
}
