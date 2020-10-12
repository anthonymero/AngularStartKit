import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  themeColor = 'primary';
  constructor(
    private readonly dialog: MatDialog,
    private notificationService: NotificationService,
  ) {}


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
