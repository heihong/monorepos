import { createAction, props } from '@ngrx/store';
import { RouterStateCourant } from './userflow.reducer';


export const setSteps = createAction(
  `[Userflow] Set Steps`,
  props<{
    steps: string[];
  }>()
);

export const getStepsCourant = createAction(
  `[Userflow] get Steps Courant`
);

export const setStepsCourant = createAction(
  `[Userflow] Set Steps Courant`,
  props<{
    stepCourant: RouterStateCourant;
  }>()
);


export const next = createAction(
  `[Utils Router] Next`
);

export const previous = createAction(
  `[Utils Router] Previous`
);
