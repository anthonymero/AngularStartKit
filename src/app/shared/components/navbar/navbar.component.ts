import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() themeColor = '';


  constructor(
    private readonly sidenavService: SidenavService,
  ) { }


  onToggleSideMenu(): void {
    this.sidenavService.toggle();
  }
}
