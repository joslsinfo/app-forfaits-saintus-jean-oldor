import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
    };
    public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
    { data: [65, 59, 80, 81, 56, 55, 40 ], label: 'Série A' },
    { data: [28, 48, 40, 19, 86, 27, 90 ], label: 'Série B' }
    ]
    };

}
