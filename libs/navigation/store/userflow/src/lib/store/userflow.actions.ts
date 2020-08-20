import { createAction, props } from '@ngrx/store';

export const setSteps = createAction(
  `[Userflow] Set Steps`,
  props<{
    steps: string[];
  }>()
);
