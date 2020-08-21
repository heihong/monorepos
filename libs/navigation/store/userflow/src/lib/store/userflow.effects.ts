import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './userflow.actions';
import { UserflowFacade } from './userflow.facade';
import { withLatestFrom, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserflowEffects {
    next$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(fromActions.next),
            withLatestFrom(this.userflowFacade.getSteps$, this.userflowFacade.getStepCourant$),
            tap(( [, steps, stepCourant] )=> {
                const index = steps.indexOf(stepCourant.url.split('/')[1]);
                this.router.navigate([steps[index+1]]);
            })
        ),
        { dispatch: false }
    );

    previous$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(fromActions.previous),
            withLatestFrom(this.userflowFacade.getSteps$, this.userflowFacade.getStepCourant$),
            tap(( [, steps, stepCourant]) => {
                const index = steps.indexOf(stepCourant.url.split('/')[1]);
                this.router.navigate([steps[index-1]]);
            })
        ),
        { dispatch: false }
    );

    go$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(fromActions.go),
            tap(({stepKey}) => {
                this.router.navigate([stepKey]);
            })
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
        private userflowFacade: UserflowFacade,
        private router : Router

    ){}
}