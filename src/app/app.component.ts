import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemingService } from './theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{
  themingSubscription: Subscription;

  themeColor = 'primary';

  constructor(
    private readonly themingService: ThemingService,
  ) {}

  @HostBinding('class') public cssClass: string;

  ngOnInit(): void {
    this.themingSubscription =
    this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
    });
  }

  ngOnDestroy(): void {
    this.themingSubscription.unsubscribe();
  }
}
