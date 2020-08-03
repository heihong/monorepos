import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepNavigationComponent } from './step-navigation/step-navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StepNavigationComponent],
  exports: [StepNavigationComponent]
})
export class StepNavigationModule {}
