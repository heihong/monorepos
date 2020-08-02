import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepCComponent } from './step-c/step-c.component';

export const stepCRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StepCComponent],
})
export class StepCModule {}
