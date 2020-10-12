import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../app-angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogComponent } from './components/dialog/dialog.component';




@NgModule({
  declarations: [SidenavComponent, DialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    SidenavComponent,
    AngularMaterialModule,
  ]
})
export class SharedModule { }
