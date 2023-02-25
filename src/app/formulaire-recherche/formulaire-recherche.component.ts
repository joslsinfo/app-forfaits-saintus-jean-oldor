import { ForfaitsService } from './../forfaits.service';
import { Recherche } from './../recherche';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {

  // forfaits: Forfait[] = [];

  @Input() forfait?: Forfait;
 

  @Input()  recherche!: Recherche;
  @Output() rechercheChange = new EventEmitter();

  

  changeNom(nouvelleValeur: string){
    let nouvelleRecherche : Recherche = {
      nom: nouvelleValeur,
      dateDebut: this.recherche.dateDebut,
      dateFin: this.recherche.dateFin
    };

  this.recherche = nouvelleRecherche;
  this.rechercheChange.emit(nouvelleRecherche);

  }

  changeDateDebut(nouvelleValeur: string) {
    let nouvelleRecherche : Recherche = {
      nom: this.recherche.nom,
      dateDebut: nouvelleValeur,
      dateFin: this.recherche.dateFin

    };

    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);

  }


  changeDateFin(nouvelleValeur: string) {
    let nouvelleRecherche : Recherche = {
      nom: this.recherche.nom,
      dateDebut: this.recherche.dateFin,
      dateFin: nouvelleValeur

    };

    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);

  }





  
  constructor() { }

  ngOnInit() {
    // this.getForfaits();

  }

  // getForfaits() {
  //   this.forfaitService.getForfaits(this.recherche).subscribe(
  //     forfaits => this.forfaits = forfaits
  //   );
  // }

}
