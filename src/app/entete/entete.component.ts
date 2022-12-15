import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
  title = 'app-forfaits-saintus-jean-oldor';
  constructor() { }

  ngOnInit(): void {
  }

  public getDate(): Date {
    return new Date();
  }

}
