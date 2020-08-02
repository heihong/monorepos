import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StepAComponent } from './step-a/step-a.component';

export const stepARoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StepAComponent],
})
export class StepAModule {}
