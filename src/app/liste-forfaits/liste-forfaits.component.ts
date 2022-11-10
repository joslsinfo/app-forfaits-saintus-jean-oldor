import { FORFAITS } from './../mock-forfaits';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {

  forfaits = FORFAITS

  constructor() { }

  ngOnInit(): void {
  }

  public getDate(): Date {
    return new Date();
  }
  
}
