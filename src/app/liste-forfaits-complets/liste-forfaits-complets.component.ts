import { ForfaitsService } from './../forfaits.service';
import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits-complets',
  templateUrl: './liste-forfaits-complets.component.html',
  styleUrls: ['./liste-forfaits-complets.component.css']
})
export class ListeForfaitsCompletsComponent implements OnInit {
 
 
  // forfaits = FORFAITS
  // forfaits: Forfait[] = [];


  // constructor(private forfaitService: ForfaitsService) { }

  ngOnInit(): void {
    // this.getForfaits();
  }

  // getForfaits(): void {
  //   this.forfaitService.getForfaits()
  //   .subscribe(resultat => this.forfaits = resultat);
  //   }

}
