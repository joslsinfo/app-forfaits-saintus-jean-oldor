import { Component, Input, OnInit } from '@angular/core';
import { Avis } from '../avis';
import { Etablissement } from '../etablissement';

import { Forfait } from '../forfait';



@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
 
  // @Input() nom? = '';
  // @Input() etablissement? = '';
  // @Input() dateDebut? = '';
  // @Input() dateFin? = '';
  // @Input() prix? = 0;

  @Input() forfait?: Forfait;

  @Input() avis?: Avis;
  @Input() etablissment?: Etablissement;

 
  constructor() { }

  ngOnInit(): void {
  }

}
