
import { FORFAITS } from './../mock-forfaits';
import { Component, Input, OnInit } from '@angular/core';
import { ForfaitsService } from '../forfaits.service';
import { Forfait } from '../forfait';



@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {

//  forfaits = FORFAITS
 forfaits: Forfait[]  = [];

 
 constructor(private forfaitService: ForfaitsService) { }

 ngOnInit(): void {
   this.getForfaits();
 }

   getForfaits(): void {
     this.forfaitService.getForfaits()
     .subscribe(resultat => {
       this.forfaits = resultat
     }, (err) => {
      console.log("Impossible d'obtenir les données de l'url" + err);
  
         });
  
     }
}

  // public getDate(): Date {
  //   return new Date();
  // }




 
  

