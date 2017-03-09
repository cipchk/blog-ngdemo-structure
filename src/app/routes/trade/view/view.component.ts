import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-list',
    template: `
<h1>Trade View Content--数据控制</h1>
<form novalidate [formGroup]="form">
    <input type="text" class="form-control" name="name" formControlName="name">
</form>
<ul>
    <li *ngFor="let item of list | async" >{{item.time}}</li>
</ul>
  `
})
export class ViewComponent implements OnInit {

    private form: FormGroup;
    constructor(private fb: FormBuilder) {

    }

    public list;
    
    ngOnInit() {
        this.form = this.fb.group({
            name: ''
        });
        this.list = this.form.get('name')
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(val => {
                console.log('新值', val)
            })
            .map(val => {
                // HTTP请求查询
                return new Array(5).fill(0).map(i => { return { time: val + Math.random() }; });
            });
    }

}
