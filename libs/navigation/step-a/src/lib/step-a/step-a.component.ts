import { Component, OnInit, OnDestroy,  ChangeDetectionStrategy } from '@angular/core';
import * as fromActions from '@monorepos/navigation/store/userflow';
import * as fromReducer from '@monorepos/navigation/store/userflow';
import { Store } from '@ngrx/store';
import { Path } from '@monorepos/navigation/settings/path.settings';


@Component({
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepAComponent{

  constructor(private userflowStore: Store<fromReducer.UserflowState>) {
  }

  go() {
    this.userflowStore.dispatch(fromActions.go({stepKey : Path.Step_C}));
  }
}
