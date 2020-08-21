import { Component, ChangeDetectionStrategy,  EventEmitter, Input,
  Output } from '@angular/core';
import * as fromActions from '@monorepos/navigation/store/userflow';
import * as fromReducer from '@monorepos/navigation/store/userflow';
import { Store } from '@ngrx/store';

@Component({
  selector: 'monorepos-step-navigation',
  templateUrl: './step-navigation.component.html',
  styleUrls: ['./step-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepNavigationComponent {
  @Input() disablePrevious= false;
  @Input() disableNext = false;

  constructor(private userflowStore: Store<fromReducer.UserflowState>) {
  }
 
  next() {
    this.userflowStore.dispatch(fromActions.next());
  }

  previous() {
    this.userflowStore.dispatch(fromActions.previous());
  }
}
