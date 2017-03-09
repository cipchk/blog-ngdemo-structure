import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

@Component({
    selector: 'app-list',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">Confirm</h4>
                   </div>
                   <div class="modal-body">
                     <p>Are you sure?</p>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>`
})
export class CancelComponent extends DialogComponent<any, boolean> {
    constructor(dialogService: DialogService) {
        super(dialogService);
    }
    confirm() {
        this.result = true;
        this.close();
    }
}
