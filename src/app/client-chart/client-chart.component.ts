import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


import { ClientsService } from '../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-chart',
  templateUrl: './client-chart.component.html',
  styleUrls: ['./client-chart.component.css']
})
export class ClientChartComponent implements OnInit {

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };



// Initialisation des données à une valeur vide pour éviter une erreur undefined
  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: [],
    datasets: []
  };

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
   this.getClientsData();

  }

  getClientsData(){

        // La récupération des données de l'API via le service client
        this.clientService.getClientsParVille().subscribe(data => {
          console.log(data)
        // L'extraction des données nécessaires pour le graphique
        const labels = Object.keys(data);
        const values = Object.values(data);
        const backgroundColors = [];
        for (let i = 0; i < labels.length; i++) {
          // L'ajout d'une couleur différente pour chaque ville
          backgroundColors.push(getRandomColor());
        }
        // La mise à jour des données du graphique
        this.mesDonnees = {
          labels: labels,
          datasets: [
            { data: values, label: 'Nombre de clients par ville', backgroundColor: backgroundColors }
          ]
        };
      });
          
            // fonction pour obtenir une couleur aléatoire
        function getRandomColor() {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
  }
  
  
    
}

 
 

 

