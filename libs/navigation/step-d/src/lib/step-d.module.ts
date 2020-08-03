import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepDComponent } from './step-d/step-d.component';
import { StepNavigationModule } from '@monorepos/navigation/step-navigation'

export const stepDRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StepDComponent}
    ]),
    StepNavigationModule
  ],
  declarations: [StepDComponent],
})
export class StepDModule {}
