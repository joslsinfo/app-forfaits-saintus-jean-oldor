import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-etablissement',
  templateUrl: './forfait-etablissement.component.html',
  styleUrls: ['./forfait-etablissement.component.css']
})
export class ForfaitEtablissementComponent implements OnInit {

  forfaits = FORFAITS

  constructor() { }

  ngOnInit(): void {
  }

}
