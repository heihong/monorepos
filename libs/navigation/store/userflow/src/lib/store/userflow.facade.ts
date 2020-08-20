import { Injectable } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';

import * as fromReducerRoute from '@monorepos/navigation/store/router';


export const selectRouter = createSelector(fromReducerRoute.ngrxRouterStateSelector, state => state.router);

@Injectable()
export class UserflowFacade {
    constructor(private store: Store<any>) {}
    getRouterCourant$ = this.store.pipe(select(selectRouter));
}