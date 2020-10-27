import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() themeColor = '';

  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  opened: boolean;

  constructor(
    private readonly sidenavService: SidenavService,

  ) { }


  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.resolveSidenavState();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 64;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;

    }
  }

  isBiggerScreen(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }


  private resolveSidenavState(): void {
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 64;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
  }

}
