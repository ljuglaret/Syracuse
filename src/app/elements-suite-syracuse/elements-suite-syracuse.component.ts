
import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import 'chartjs-plugin-datalabels';
import {syracuse , genereAbscisse, maxTab, tempsDeVolEnAltitude} from './app.calcul';
@Component({
  selector: 'app-elements-suite-syracuse',
  templateUrl: './elements-suite-syracuse.component.html',
  styleUrls: ['./elements-suite-syracuse.component.css'],
})
export class ElementsSuiteSyracuseComponent implements OnInit {


  constructor() {}

  public  termeInitial = 17;

  public barChartOptions = {} ;

  public barChartLabels: number[] = [];

  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [];



  ngOnInit(): void {
  }

onKeyup(event: KeyboardEvent): void{
  this.termeInitial = +( event.target as HTMLInputElement ).value;

  const opt =  { scales: {
                  yAxes: [{
                      scaleLabel:  {
                      display: true,
                      },
                      ticks: {
                                  min: 1,
                                  max: maxTab(syracuse(this.termeInitial ) ) + 5,
                                  stepSize: 1}
                      }]}};

  this.barChartOptions = opt;
  this.barChartLabels  = genereAbscisse(this.termeInitial) ;
  this.barChartData = [
    {data: syracuse(this.termeInitial),
      pointColor : 'black',
      label: 'Elements de Syracuse d element initial : ' + this.termeInitial,
      pointBackgroundColor: (context) => {
        const index: number = context.dataIndex;
        const rg = +( event.target as HTMLInputElement ).value;

        const value: number = context.dataset.data[index];
        return value === 1   ? 'red' :
            value ===  maxTab(syracuse(rg)) ? 'blue' :
            value === tempsDeVolEnAltitude(syracuse(rg))   ? 'black' :
            '';
    },
    pointRadius: (context) => {
      const index: number = context.dataIndex;
      const value: number = context.dataset.data[index];
      const rg = +( event.target as HTMLInputElement ).value;

      return value === 1   ? 15 :
          value === maxTab(syracuse(rg)) ? 15 :
          value === tempsDeVolEnAltitude(syracuse(rg))   ? 15 :
                      3;
    },
    borderColor : 'violet',
    fill: false}
  ];
}

}

