import { Component, Input, OnInit } from '@angular/core';
import { Avis } from '../avis';
import { Etablissement } from '../etablissement';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {

  @Input() forfait?: Forfait;
  @Input() avis?: Avis;
  @Input() etablissment?: Etablissement;
  
  // @Input() prix?: Forfait;
  // @Input() nouveauPrix?: Forfait;




  constructor() { }

  ngOnInit(): void {
  }

}
