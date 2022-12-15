import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-mini-forfaits',
  templateUrl: './liste-mini-forfaits.component.html',
  styleUrls: ['./liste-mini-forfaits.component.css']
})
export class ListeMiniForfaitsComponent implements OnInit {

  forfaits = FORFAITS

  constructor() { }

  ngOnInit(): void {
  }

}
