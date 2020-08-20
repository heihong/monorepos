import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { routerReducers } from './store/router.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './custom-serializer';


@NgModule({
    imports: [
      StoreModule.forFeature('ngrx-router', routerReducers),
      StoreRouterConnectingModule.forRoot({
        serializer: CustomSerializer,
      })
    ]
  })
export class NgrxRouterModule {}