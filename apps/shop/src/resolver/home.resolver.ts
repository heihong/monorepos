import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromActions from '@monorepos/shop/stores/book';
import * as fromReducer from '@monorepos/shop/stores/book';

@Injectable({
    providedIn: 'root',
})
export class HomeResolver implements Resolve<boolean> {
    constructor(private bookStore: Store<fromReducer.BookState>) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.bookStore.dispatch(fromActions.loadRequest());
        return state;
    }
}
