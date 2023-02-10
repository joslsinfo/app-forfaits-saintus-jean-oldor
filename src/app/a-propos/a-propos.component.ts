import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {

  appName='Application Angular - Forfaits';
  appVersion='Version 1.0.0';
  appAuthor='JOS'

  constructor() { }

  ngOnInit(): void {
  }

}
