import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Rx";
import 'rxjs/Rx';

@Component({
    selector: 'app-list',
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

    user: Object = {};
    form: FormGroup;

    nameCheck(ctrl: FormControl) {
        return new Observable((obs: Observer<any>) => {
            ctrl
                .valueChanges
                .debounceTime(500)
                .distinctUntilChanged()
                .map(value => {
                    console.log('用户名：', value)
                    if (value != 'admin') throw new Error('无效用户');
                    return value;
                })
                .subscribe(
                    res => {
                        obs.next(null);
                        obs.complete();
                    },
                    err => {
                        obs.next({asyncInvalid: true});
                        obs.complete();
                    }
                );
        });
    }

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            'name': new FormControl('', [Validators.required, Validators.maxLength(20)], [ this.nameCheck ]),
            'pwd': ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    onTemplateSave() {
        console.log('Template Submit Result:', this.user)
    }

    onModelSave() {
        console.log('Model Submit Result:', this.form.value)
    }

}
