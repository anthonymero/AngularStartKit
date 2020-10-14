import { Component, OnInit, Input, ViewChild, HostListener, SimpleChanges, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() themeColor = '';
  @Input() opened;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;


  constructor(
    private readonly dialog: MatDialog,
    private notificationService: NotificationService,

  ) { }


  ngOnInit(): void {

    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 64;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
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


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: {
        themeColor: this.themeColor,
      }
    });
  }

  openNotification(): void {
    this.notificationService.info('Default Notification');
  }

}
