import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userflowReducer } from './store/userflow.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { UserflowEffects } from './store/userflow.effects';
import { UserflowFacade } from './store/userflow.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('userflowState', userflowReducer),
    EffectsModule.forFeature([UserflowEffects]),
  ],
  providers:[UserflowFacade]
})
export class UserflowModule {}
