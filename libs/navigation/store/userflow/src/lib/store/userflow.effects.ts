import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './userflow.actions';
import { UserflowFacade } from './userflow.facade';
import { withLatestFrom, map } from 'rxjs/operators';

@Injectable()
export class UserflowEffects {
    next$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(fromActions.next),
        ),
        { dispatch: false }
    );

    getStepsCourant = createEffect(
        () =>
        this.actions$.pipe(
            ofType(fromActions.getStepsCourant),
            withLatestFrom(this.userflowFacade.getRouterCourant$),
            map( ([, state]) => {
               return fromActions.setStepsCourant({stepCourant: state.state});
            })
        )
    );
    
    constructor(
        private actions$: Actions,
        private userflowFacade: UserflowFacade
    ){}
}