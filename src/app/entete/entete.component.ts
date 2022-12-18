import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
  title = 'app-forfaits-saintus-jean-oldor';


  constructor() { 
    this.updateTime();
  }

  ngOnInit(): void {
  }

  public time: string = new Date().toLocaleTimeString();

  public getDate(): Date {
    return new Date();
  }

  public updateTime():void {
    setInterval( () => {
      this.time = new Date().toLocaleTimeString()
    }, 1000);
  }

}
