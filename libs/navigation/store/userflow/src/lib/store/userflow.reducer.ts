import * as fromActions from './userflow.actions';
import { Params, RouterStateSnapshot } from '@angular/router';

import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';

export interface UserflowState {
  steps: string[];
  stepCourant: RouterStateCourant
}

const initialState: UserflowState = {
  steps: null,
  stepCourant: null
};

export interface RouterStateCourant {
  url: string;
  params: Params;
  queryParams: Params;
}

export const reducer = createReducer(
  initialState,
  on(
    fromActions.setSteps,
    (state, { steps }): UserflowState => ({
      ...state,
      steps,
    })
  ),
  on(
    fromActions.setStepsCourant,
    (state, { stepCourant }): UserflowState => ({
      ...state,
      stepCourant,
    })
  )
);

export function userflowReducer(state: UserflowState | undefined, action: Action) {
  return reducer(state, action);
}


export const userflowStateSelector = createFeatureSelector<UserflowState>(
  'userflowState'
);


