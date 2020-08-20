import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepDComponent } from './step-d/step-d.component';
import { StepNavigationModule } from '@monorepos/navigation/step-navigation';
import { UserflowModule } from '@monorepos/navigation/store/userflow';

export const stepDRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StepDComponent}
    ]),
    StepNavigationModule,
    UserflowModule,
  ],
  declarations: [StepDComponent],
})
export class StepDModule {}
