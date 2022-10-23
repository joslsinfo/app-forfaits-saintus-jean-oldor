import { Forfait } from './../forfait';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
  @Input() forfait?: Forfait;
  
  constructor() { }

  ngOnInit(): void {
  }

}
