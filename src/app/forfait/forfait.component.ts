import { Component, OnInit, Input } from '@angular/core';
import { Avis } from '../avis';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
 
  @Input() forfait?: Forfait;
  @Input() avis?: Avis;

  constructor() { }

  ngOnInit(): void {
  }

}
