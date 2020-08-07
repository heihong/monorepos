import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBookListService } from './in-memory-book-list.service';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeResolver } from './../resolver/home.resolver'
import { HomeModule } from '@monorepos/shop/pages/home'



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@monorepos/shop/pages/home').then(m => m.HomeModule),
    resolve: {
      data: HomeResolver
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBookListService),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    HomeModule
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
