import { FORFAITS } from './../mock-forfaits';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
[x: string]: any;
  forfaits = FORFAITS

  constructor() { }

  ngOnInit(): void {
  }

}
