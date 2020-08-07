import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookModule } from '@monorepos/shop/stores/book'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
    BookModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
