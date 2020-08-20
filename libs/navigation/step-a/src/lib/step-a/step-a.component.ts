import { Component, OnInit, OnDestroy,  ChangeDetectionStrategy } from '@angular/core';
import * as fromActions from '@monorepos/navigation/store/userflow';
import * as fromReducer from '@monorepos/navigation/store/userflow';
import { Store } from '@ngrx/store';


@Component({
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepAComponent{

  constructor(private userflowStore: Store<fromReducer.UserflowState>) {
  }
  next() {
    this.userflowStore.dispatch(fromActions.next());
  }
}
