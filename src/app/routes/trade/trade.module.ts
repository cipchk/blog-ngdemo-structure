import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CancelComponent } from './cancel/cancel.component';
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'view', component: ViewComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ListComponent,
        ViewComponent,
        CancelComponent
    ],
    entryComponents: [
        CancelComponent
    ],
    exports: [
        ListComponent,
        ViewComponent
    ]
})
export class TradeModule {}
