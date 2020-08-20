import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { Path } from './settings/path.settings'
import { StoreModule } from '@ngrx/store';
import { NgrxRouterModule } from '@monorepos/navigation/store/router';
import { StepResolver } from '../resolver/step.resolver';

const routes = [
  {
    path: Path.Step_A,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-a'
      ).then(m => m.StepAModule),
      resolve: {
        data: StepResolver
      }
  },{
    path: Path.Step_B,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-b'
      ).then(m => m.StepBModule)
  },{
    path: Path.Step_C,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-c'
      ).then(m => m.StepCModule)
  },{
    path: Path.Step_D,
    loadChildren: () =>
      import(
        '@monorepos/navigation/step-d'
      ).then(m => m.StepDModule)
  },
  {
    path: '',
    redirectTo: Path.Step_A,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    NgrxRouterModule,
   // !environment.production ? StoreDevtoolsModule.instrument() : [],
   StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
