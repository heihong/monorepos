import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as fromActions from './book.action';
import { HttpClient } from '@angular/common/http';
import * as fromReducer from './book.reducer';

@Injectable()
export class BookEffects {
    loadRequest$ = createEffect(
      () => {
        return  this.actions$.pipe(
          ofType(fromActions.loadRequest),
          mergeMap((_) => this.http.get<fromReducer.BookList[]>('api/bookList')
            .pipe(
              map((result: fromReducer.BookList[]) => {
                return fromActions.loadRequestSuccess({ payload: result });

              }),
              catchError(error => of(fromActions.loadRequestFailure(error)))
            )
          )
        )}
      );
      constructor(
        private actions$: Actions,
        private http: HttpClient
      ) {}

}
