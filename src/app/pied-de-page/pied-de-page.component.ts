import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pied-de-page',
  templateUrl: './pied-de-page.component.html',
  styleUrls: ['./pied-de-page.component.css']

})
export class PiedDePageComponent implements OnInit {
piedDePage=`Réalisé par Saintus Jean Oldor`;



  constructor() { }

  ngOnInit(): void {
  }

  // public getDate():string{
  //   return new Date().toLocaleDateString();

  // }
  // public getTime():string{
  //   return new Date().toLocaleTimeString();

  // }



}
