import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepBComponent } from './step-b/step-b.component';

export const stepBRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StepBComponent],
})
export class StepBModule {}
