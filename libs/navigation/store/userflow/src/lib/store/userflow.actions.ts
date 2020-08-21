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
  `[Userflow] Next`
);


export const go = createAction(
  `[Userflow] Go`,
  props<{
    stepKey: string;
  }>()
);


export const previous = createAction(
  `[Userflow] Previous`
);
