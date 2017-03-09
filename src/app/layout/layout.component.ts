import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
  <div class="header" style="background:#999"><a routerLink="/">header</a></div>
  <div class="layout" style="display:flex">
    <div class="menu" style="background:#ccc;">
      <h2>Menu</h2>
      <ul>
        <li><a routerLink="/trade/list">trade list</a></li>
        <li><a routerLink="/user/list">user list</a></li>
      </ul>
    </div>
    <div class="main"><router-outlet></router-outlet></div>
  </div>
  `
})
export class LayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
