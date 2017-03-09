import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
    selector: 'app-list',
    providers: [UserService],
    template: `
    <p>User List Content <a routerLink="/user/view">to view</a></p>
        <ul>
            <li *ngFor="let item of list">{{item.id}}</li>
        </ul>
    `
})
export class ListComponent implements OnInit {

    public list;

    constructor(private _srv: UserService) { }

    ngOnInit() {
        this._srv.getUseres().subscribe(res => {
            this.list = res;
        })
    }
}
