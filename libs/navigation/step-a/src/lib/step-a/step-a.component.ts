import { Component, OnInit, OnDestroy,  ChangeDetectionStrategy } from '@angular/core';
import { StoreRootState, getCurrentRouteState } from '@monorepos/navigation/router';
import { Store, select } from '@ngrx/store';

@Component({
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepAComponent implements OnInit, OnDestroy {

  private subscriptions: { [key: string]: any } = {};

  constructor(private store: Store<StoreRootState>) {}

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(select(getCurrentRouteState))
      .subscribe((route: any) => {
        console.log(route)
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }
}
