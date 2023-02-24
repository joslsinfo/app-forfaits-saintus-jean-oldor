import { ForfaitsService } from './../forfaits.service';
import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ChartOptions, ChartType } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.css']
})
export class Graphique2Component implements OnInit {


  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  


// public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
public pieChartLabels = [ [ '', '' ], [ '', '', '' ], '' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartData!: number[];
  constructor(private forfaitService: ForfaitsService) { }

  ngOnInit(): void {

    this.forfaitService.getForfaits().subscribe((forfaits: Forfait[]) => {
      const villes = forfaits.map(forfait => forfait.etablissement.coordonnees.ville);
      const uniqueVilles = Array.from(new Set(villes));
      const villeCounts = uniqueVilles.map(ville => {
        return villes.filter(v => v === ville).length;
      });
      this.pieChartData = villeCounts;
      this.pieChartLabels = uniqueVilles;
      this.pieChartDatasets = [{
        data: villeCounts
      }];
    });
  }

}
