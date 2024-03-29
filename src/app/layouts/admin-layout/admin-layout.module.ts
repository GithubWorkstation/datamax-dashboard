import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UsersComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AdminLayoutModule { }
