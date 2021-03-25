
import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import 'chartjs-plugin-datalabels';
import {syracuse , genereAbscisse, maxTab, rang1} from './app.calcul';
@Component({
  selector: 'app-elements-suite-syracuse',
  templateUrl: './elements-suite-syracuse.component.html',
  styleUrls: ['./elements-suite-syracuse.component.css'],
})
export class ElementsSuiteSyracuseComponent implements OnInit {


  constructor() {}

  public  rang = 17;
  public maxi = maxTab(syracuse(this.rang));

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: number[] = genereAbscisse(this.rang + 1 );

  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {data: syracuse(this.rang),
      
      
      label: 'Elements de Syracuse d element initial' + this.rang,
      pointBackgroundColor: function(context) {
        const index: number = context.dataIndex;
        const value: number = context.dataset.data[index];
        return value === 1   ? 'red' :
            value === maxTab(syracuse(17)) ? 'blue' :
            value % 0 ===  5 ? 'green' :
                        '';
    },
    borderColor : 'violet',
    fill: false}
  ];



onKey(event: KeyboardEvent): void{
  this.rang = +(<HTMLInputElement> event.target).value;
  this.barChartLabels  = genereAbscisse(this.rang) ;
  this.barChartData = [
    {data: syracuse(this.rang),
      label: 'Elements de Syracuse d element initial' + this.rang,
      
     
      pointBackgroundColor: function(context) {
        const index: number = context.dataIndex;
        const rg = +(<HTMLInputElement> event.target).value;

        const value: number = context.dataset.data[index];
        return value === 1   ? 'red' :
            value ===  maxTab(syracuse(rg)) ? 'blue' :
                        '';
    },
    borderColor : 'violet',
    fill: false}
  ];
}

  ngOnInit(): void {
  }
}

