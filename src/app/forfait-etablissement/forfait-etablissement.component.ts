import { Component, OnInit } from '@angular/core';
import { ForfaitsService } from '../forfaits.service';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-etablissement',
  templateUrl: './forfait-etablissement.component.html',
  styleUrls: ['./forfait-etablissement.component.css']
})
export class ForfaitEtablissementComponent implements OnInit {

  forfaits = FORFAITS

  constructor(private forfaitService: ForfaitsService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
    .subscribe(resultat => {
      this.forfaits = resultat
    }, (err) => {
     console.log("Impossible d'obtenir les données de l'url" + err);
 
        });
 
    }

}
