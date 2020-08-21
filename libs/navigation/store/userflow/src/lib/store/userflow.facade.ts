import { Injectable } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';

import * as fromReducerRoute from '@monorepos/navigation/store/router';
import * as fromReducer from './userflow.reducer';


const selectRouter = createSelector(fromReducerRoute.ngrxRouterStateSelector, state => state.router);
const selectSteps = createSelector(fromReducer.userflowStateSelector, state => state.steps);
const selectStepCourant = createSelector(fromReducer.userflowStateSelector, state => state.stepCourant);

@Injectable()
export class UserflowFacade {
    constructor(private store: Store<any>) {}
    getRouterCourant$ = this.store.pipe(select(selectRouter));
    getSteps$ = this.store.pipe(select(selectSteps));
    getStepCourant$ = this.store.pipe(select(selectStepCourant));
}