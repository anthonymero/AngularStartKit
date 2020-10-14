import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  @ViewChild(SidenavComponent) child;

  isSidenavOpened = true;
  themeColor = 'primary';


  ngAfterViewInit(): void {
    this.isSidenavOpened = this.child.opened;
    console.log( this.isSidenavOpened);
  }

  openSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }



}
