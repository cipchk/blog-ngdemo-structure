import { UserMemoryData } from './user.memory.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'view', component: ViewComponent }
];

@NgModule({
    imports: [
        SharedModule,
        InMemoryWebApiModule.forRoot(UserMemoryData),
        RouterModule.forChild(routes)
    ],
    declarations: [
        ListComponent,
        ViewComponent
    ],
    exports: [
        ListComponent,
        ViewComponent
    ]
})
export class UserModule {}
