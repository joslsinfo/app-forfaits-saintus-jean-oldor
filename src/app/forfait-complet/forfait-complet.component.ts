import { Component, Input, OnInit } from '@angular/core';
import { Avis } from '../avis';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {

  @Input() forfait?: Forfait;
  // @Input() avis: Forfait[] = [];
  // @Input() note? ='';
  // @Input() commentaires='';
  

  constructor() { }

  ngOnInit(): void {
  }

}
