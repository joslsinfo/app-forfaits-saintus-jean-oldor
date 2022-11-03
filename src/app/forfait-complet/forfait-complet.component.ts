import { Component, Input, OnInit } from '@angular/core';
import { Avis } from '../avis';
import { Etablissement } from '../etablissement';
import { Forfait } from '../forfait';



@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {

  @Input() forfait?: Forfait;
  @Input() avis?: Avis;
  @Input() etablissment?: Etablissement;


  // @Input() avis: Forfait[] = [];
  // @Input() note? ='';
  // @Input() commentaires='';
  

  constructor() { }

  ngOnInit(): void {
  }

}
