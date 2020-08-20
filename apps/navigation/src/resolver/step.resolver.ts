import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromActions from '@monorepos/navigation/store/userflow';
import * as fromReducer from '@monorepos/navigation/store/userflow';
import { steps } from '../app/settings/path.settings';

@Injectable({
    providedIn: 'root',
})
export class StepResolver implements Resolve<boolean> {
    constructor(private userflowStore: Store<fromReducer.UserflowState>) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        
        this.userflowStore.dispatch(fromActions.setSteps({steps}));
        return state;
    }
}
