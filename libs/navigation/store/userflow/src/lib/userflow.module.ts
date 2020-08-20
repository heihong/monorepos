import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userflowReducer } from './store/userflow.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('userflowState', userflowReducer)
  ],
})
export class UserflowModule {}
