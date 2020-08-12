import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bookReducer } from './book/book.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book/book.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('bookState', bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookModule {}
