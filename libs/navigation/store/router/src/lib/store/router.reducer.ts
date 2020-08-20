import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';

export interface StoreRootState {
  router: fromRouter.RouterReducerState<any>;
}
export const routerReducers: ActionReducerMap<StoreRootState> = {
  router: routerReducer,
};


export const ngrxRouterStateSelector = createFeatureSelector<StoreRootState>(
  'ngrx-router'
);