import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PATH } from './settings/path.settings'
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, routerReducers } from '@monorepos/navigation/store/router';

const routes = [
  {
    path: PATH.Step_A,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-a'
      ).then(m => m.StepAModule)
  },{
    path: PATH.Step_B,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-b'
      ).then(m => m.StepBModule)
  },{
    path: PATH.Step_C,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-c'
      ).then(m => m.StepCModule)
  },{
    path: PATH.Step_D,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-d'
      ).then(m => m.StepDModule)
  },
  {
    path: '',
    redirectTo: PATH.Step_A,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(routerReducers),
   // !environment.production ? StoreDevtoolsModule.instrument() : [],
   StoreDevtoolsModule.instrument(),
   StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
