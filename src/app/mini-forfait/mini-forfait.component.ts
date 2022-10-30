import { Component, Input, OnInit } from '@angular/core';

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

 
  constructor() { }

  ngOnInit(): void {
  }

}
