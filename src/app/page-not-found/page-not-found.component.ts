import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    let self = this;

    setTimeout(function (){
      self.router.navigateByUrl('');
    }, 5000)
  }

  ngOnInit(): void {
  }

}
