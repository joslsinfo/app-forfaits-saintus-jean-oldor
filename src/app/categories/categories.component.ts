import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  forfaits = FORFAITS
  
  constructor() { }

  ngOnInit(): void {
  }

}
