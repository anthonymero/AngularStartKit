import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav;

  /*
  * Setter for sidenav
  */
  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  /*
  * Open this sidenav and return a Promise that will
  resolve when it's fully opened ( or get rejected if it did not)
  *
  * @returns Promise<MatDrawerToggleResult>
  */
  public open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  /*
   * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get rejected if it didn't).
   *
   * @returns Promise<MatDrawerToggleResult>
   */
  public close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }

/*
* Toggle this sidenav. Equivalent to open ( when closed) or close ( when opened) */
  public toggle(isOpen?: boolean): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(isOpen);
  }

}
