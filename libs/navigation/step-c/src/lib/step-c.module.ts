import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepCComponent } from './step-c/step-c.component';
import { NavigationStepNavigationModule } from '@monorepos/navigation/step-navigation'

export const stepCRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StepCComponent}
    ]),
    NavigationStepNavigationModule
  ],
  declarations: [StepCComponent],
})
export class StepCModule {}
