import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepDComponent } from './step-d/step-d.component';

export const stepDRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StepDComponent],
})
export class StepDModule {}
