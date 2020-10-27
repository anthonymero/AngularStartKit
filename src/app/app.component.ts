import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NotificationService } from './shared/services/notification.service';
import { ThemingService } from './theming.service';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  themingSubscription: Subscription;

  themeColor = 'primary';

  constructor(
    private readonly themingService: ThemingService,
    private overlayContainer: OverlayContainer,
    private readonly dialog: MatDialog,
    private readonly notificationService: NotificationService,

  ) { }

  @HostBinding('class') public cssClass: string;

  ngOnInit(): void {
    this.themingSubscription =
      this.themingService.theme.subscribe((theme: string) => {
        this.cssClass = theme;
        this.applyThemeOnOverlays();
      });
  }

  ngOnDestroy(): void {
    this.themingSubscription.unsubscribe();
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
    this.notificationService.default('Default Notification');
  }


  // Private method
  /*
  * Apply current theme on components with overlay (e.g. dropdowns, dialogs)
  */
  private applyThemeOnOverlays(): void {
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(this.themingService.themes);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.cssClass);
  }
}
