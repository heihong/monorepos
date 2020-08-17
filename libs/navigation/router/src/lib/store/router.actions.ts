import { createAction, props } from '@ngrx/store';
import { RouterStateUrl } from '../custom-serializer';

export const goTo = createAction(`[Utils Router] Navigate to path`, props<RouterStateUrl>());

export const nextTo = createAction(`[Utils Router] Navigate next to path`, props<RouterStateUrl>());

export const backTo = createAction(`[Utils Router] Navigate backto path`, props<RouterStateUrl>());