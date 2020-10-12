import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly ngZone: NgZone
  ) { }

  default(message: string, isHandset?: boolean): void {
    this.show(
      message,
      {
        duration: 2000,
        panelClass: 'default-notification-overlay',
      },
      isHandset
    );
  }

  info(message: string, isHandset?: boolean): void {
    this.show(
      message,
      {
        duration: 2000,
        panelClass: 'info-notification-overlay',
      },
      isHandset
    );
  }

  success(message: string, isHandset?: boolean): void {
    this.show(
      message,
      {
        duration: 2000,
        panelClass: 'success-notification-overlay',
      },
      isHandset
    );
  }

  warn(message: string, isHandset?: boolean): void {
    this.show(
      message,
      {
        duration: 2000,
        panelClass: 'warn-notification-overlay',
      },
      isHandset
    );
  }

  error(message: string, isHandset?: boolean): void {
    this.show(
      message,
      {
        duration: 2000,
        panelClass: 'error-notification-overlay',
      },
      isHandset
    );
  }

  private show(
    message: string,
    configuration: MatSnackBarConfig,
    isHandset?: boolean
  ): void {
    // If desktop move it to top right
    if (!isHandset) {
      configuration.horizontalPosition = 'right',
        configuration.verticalPosition = 'top';
    }

    // Need to open snackBar from Angular zone to prevent issuses with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.ngZone.run(() => this.snackBar.open(message, null, configuration));
  }
}
