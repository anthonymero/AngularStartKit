import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemingService } from './theming.service';

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
