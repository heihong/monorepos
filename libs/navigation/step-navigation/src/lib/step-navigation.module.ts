import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepNavigationComponent } from './step-navigation/step-navigation.component';
import { UserflowModule } from '@monorepos/navigation/store/userflow';

@NgModule({
  imports: [
    CommonModule,
    UserflowModule
  ],
  declarations: [StepNavigationComponent],
  exports: [StepNavigationComponent]
})
export class StepNavigationModule {}
