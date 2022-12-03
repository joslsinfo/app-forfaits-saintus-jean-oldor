

import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-formulaire-avis',
  templateUrl: './formulaire-avis.component.html',
  styleUrls: ['./formulaire-avis.component.css']
})
export class FormulaireAvisComponent implements OnInit {


 
  
  forfait: Forfait = {

    nom: '',
    description: '',
    code: '',
    categories: [],
    etablissement: {
        nomEtablissement: '',
        coordonnees: 
            {
                adresse: '',
                ville: '',
                telephone: '',
                courriel: '',
                siteWeb: ''

            }
   },

  dateDebut: '',
  dateFin: '',
  prix: 0,
  avis: [
      {

          note: 0,
          commentaires: ''
     }

  ],
  nouveauPrix: 0,
  premium: false,
  imageUrl: '',
  rating: 0,
  rabais: 0,
  

  

};



// ==================================================

autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  constructor() { }

  formatLabel(value: number) {
    if (value >= 10) {
      return Math.round(value / 1) + '/10';
    }

    return value + '/10';
    
    
  }


  ngOnInit(): void {
  }



}
