import * as fromActions from './userflow.actions';

import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';

export interface UserflowState {
  steps: string[];
}

const initialState: UserflowState = {
  steps: null
};

export const reducer = createReducer(
  initialState,
  on(
    fromActions.setSteps,
    (state, { steps }): UserflowState => ({
      ...state,
      steps,
    })
  )
);

export function userflowReducer(state: UserflowState | undefined, action: Action) {
  return reducer(state, action);
}


export const bookStateSelector = createFeatureSelector<UserflowState>(
  'userflowState'
);
