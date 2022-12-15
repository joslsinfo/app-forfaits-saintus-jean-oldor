import { Component, OnInit } from '@angular/core';

import { Recherche } from '../recherche';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // ==================================
  recherche :Recherche = {
    nom:'',
    dateDebut: '',
    dateFin: ''
  };
  

}
