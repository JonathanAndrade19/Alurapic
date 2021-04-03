import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoNameComponent } from './photos/photo-name/photo-name.component';

const routes: Routes = [
    { path: 'user/flavio', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent },
    { path: 'name', component: PhotoNameComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }