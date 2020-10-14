import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() themeColor = '';

  @Output()
  toggleSidenav: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }


  onToggleSideMenu(): void {
    this.toggleSidenav.emit();
  }
}
