import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepBComponent } from './step-b/step-b.component';
import { StepNavigationModule } from '@monorepos/navigation/step-navigation';
import { UserflowModule } from '@monorepos/navigation/store/userflow';

export const stepBRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StepBComponent}
    ]),
    StepNavigationModule,
    UserflowModule,
  ],
  declarations: [StepBComponent],
})
export class StepBModule {}
