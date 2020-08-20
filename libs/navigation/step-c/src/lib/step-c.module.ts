import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepCComponent } from './step-c/step-c.component';
import { StepNavigationModule } from '@monorepos/navigation/step-navigation';
import { UserflowModule } from '@monorepos/navigation/store/userflow';


export const stepCRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StepCComponent}
    ]),
    StepNavigationModule,
    UserflowModule
  ],
  declarations: [StepCComponent],
})
export class StepCModule {}
