import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepAComponent } from './step-a/step-a.component';
import { StepNavigationModule } from '@monorepos/step-navigation'

export const stepARoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StepAComponent}
    ]),
    StepNavigationModule],
  declarations: [StepAComponent],
})
export class StepAModule {}
