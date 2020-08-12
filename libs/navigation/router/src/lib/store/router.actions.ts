import { createAction, props } from '@ngrx/store';

import { NavigationExtras } from '@angular/router';

export interface GoPlayload {
  path: string;
  query?: object;
  extras?: NavigationExtras;
}

export const go = createAction(
  `[Utils Router] Navigate to path`,
  props<GoPlayload>()
);

export const next = createAction(
  `[Utils Router] Next`,
  props<{ extras?: NavigationExtras }>()
);

export const previous = createAction(
  `[Utils Router] Previous`,
  props<{ extras?: NavigationExtras }>()
);
