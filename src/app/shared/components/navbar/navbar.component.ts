import { Component, Input } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { ThemingService } from '../../../theming.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() themeColor = '';


  constructor(
    private readonly sidenavService: SidenavService,
    private readonly themingService: ThemingService,
  ) { }


  onToggleSideMenu(): void {
    this.sidenavService.toggle();
  }

  changeTheme(theme: string): void {
    this.themingService.theme.next(theme);
  }
}
