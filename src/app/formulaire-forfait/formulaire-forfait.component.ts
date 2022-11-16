import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {


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
  // propertiesStyle:true
  

};




  constructor() { }

  ngOnInit(): void {
  }



}
