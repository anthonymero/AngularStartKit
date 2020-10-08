import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../app-angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';




@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    SidenavComponent,
  ]
})
export class SharedModule { }
