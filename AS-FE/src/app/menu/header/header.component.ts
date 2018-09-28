import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHomePage: boolean;

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.isHomePage = (this.router.url === '/home');
      }
    })
  }

  ngOnInit() { }
}
