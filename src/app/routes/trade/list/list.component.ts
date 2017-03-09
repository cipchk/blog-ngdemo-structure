import { DialogService } from 'ng2-bootstrap-modal';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { CancelComponent } from "../cancel/cancel.component";

@Component({
    selector: 'app-list',
    template: `
    <p>Trade List Content <a routerLink="/trade/view">to view</a>，<button class="btn btn-default" (click)=showConfirm()>Show confirm</button></p>
    <div>
        random numbers: 
        <ul>
            <li *ngFor="let num of numbers | async">{{num}}</li>
        </ul>
    </div>
    `
})
export class ListComponent implements OnInit {

    constructor(private dialogService: DialogService) { }

    public numbers: Observable<Array<any>>;
    ngOnInit() {
        this.numbers = Observable.interval(1000 * 2).map(i => {
            return new Array(5).fill(0).map(i => { return Math.random(); });
        }).take(2);
    }

    showConfirm() {
        this.dialogService.addDialog(CancelComponent, {}).subscribe((isConfirmed) => {
            console.log(isConfirmed)
        });
    }

}
