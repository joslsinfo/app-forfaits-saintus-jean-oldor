import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits-complets',
  templateUrl: './liste-forfaits-complets.component.html',
  styleUrls: ['./liste-forfaits-complets.component.css']
})
export class ListeForfaitsCompletsComponent implements OnInit {
 
 
  forfaits = FORFAITS


  constructor() { }

  ngOnInit(): void {
  }

}
