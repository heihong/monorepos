import { Component, ChangeDetectionStrategy } from '@angular/core';
import { pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromReducer from '@monorepos/shop/stores/book';
import * as fromSelectors from '@monorepos/shop/stores/book';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {

  bookList$ = this.bookStore.select(pipe(fromSelectors.selectBookList));
  loading$ = this.bookStore.select(pipe(fromSelectors.selectLoading));

  constructor(private bookStore: Store<fromReducer.BookState>) {}

}
