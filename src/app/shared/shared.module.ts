import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../app-angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [SidenavComponent, DialogComponent, NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    SidenavComponent,
    NavbarComponent,
    AngularMaterialModule,
  ]
})
export class SharedModule { }
